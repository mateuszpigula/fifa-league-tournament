import mongoose from "mongoose";

// Load the server
import db from "./server";

import { matchesResult } from "../src/utils/match";

// Load the Product Model
const Player = require("./playerModel");
const Match = require("./matchModel");

const assignPoints = (data) => {
	const { match1, match2 } = data;

	const countMatch = (match) => {
		const { home, away } = match;
		if (home === away) {
			return {
				home: 1,
				away: 1,
			};
		}
		if (home > away) {
			return {
				home: 3,
				away: 0,
			};
		} else {
			return {
				home: 0,
				away: 3,
			};
		}
	};
	const m1Points = countMatch(match1);
	const m2Points = countMatch(match2);
	return {
		player1: m1Points.home + m2Points.home,
		player2: m1Points.away + m2Points.away,
	};
};
exports.handler = async (event, context) => {
	context.callbackWaitsForEmptyEventLoop = false;

	try {
		const data = JSON.parse(event.body);
		const id = mongoose.Types.ObjectId();

		const player1 = await Player.findOne({ psn: data.player1 });
		const player2 = await Player.findOne({ psn: data.player2 });
		const playersMatch = await Match.find({
			$and: [
				{ $or: [{ player1: player1.psn }, { player2: player1.psn }] },
				{ $or: [{ player1: player2.psn }, { player2: player2.psn }] },
			],
		});

		if (playersMatch.length > 0) {
			const response = {
				msg: "Result between these players already exists!",
				data: { playersMatch },
			};
			return {
				statusCode: 400,
				body: JSON.stringify(response),
			};
		}
		const points = assignPoints(data);

		const match = {
			...data,
			_id: id,
			__v: 0,
		};

		await Match.create(match);
		const results = matchesResult([match.match1, match.match2]);

		const player1Updated = await Player.updateOne(
			{ psn: data.player1 },
			{
				points: player1.points + points.player1,
				matches_count: player1.matches_count + 2,
				goals_scored: player1.goals_scored + match.match1.home + match.match2.home,
				goals_conceded: player1.goals_conceded + match.match1.away + match.match2.away,
				wins: player1.wins + results.home,
				draws: player1.draws + results.draw,
				loses: player1.loses + results.away,
			}
		);
		const player2Updated = await Player.updateOne(
			{ psn: data.player2 },
			{
				points: player2.points + points.player2,
				matches_count: player2.matches_count + 2,
				goals_scored: player2.goals_scored + match.match1.away + match.match2.away,
				goals_conceded: player2.goals_conceded + match.match1.home + match.match2.home,
				wins: player2.wins + results.away,
				draws: player2.draws + results.draw,
				loses: player2.loses + results.home,
			}
		);
		const response = {
			msg: "Result successfully added",
			data: { match, player1Updated, player2Updated },
		};

		return {
			statusCode: 201,
			body: JSON.stringify(response),
		};
	} catch (err) {
		console.log("result.create", err); // output to netlify function log

		return {
			statusCode: 500,
			body: JSON.stringify({ msg: err.message }),
		};
	}
};
