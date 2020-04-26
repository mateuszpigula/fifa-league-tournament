import mongoose from "mongoose";

// Load the server
import db from "./server";

import { matchResult } from "../src/utils/match";

// Load the Product Model
const Player = require("./playerModel");
const Match = require("./matchModel");

const countMatch = ({ home, away }) => {
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

const assignPoints = (data) => {
	const { home, away } = data;

	const points = countMatch({ home, away });
	return {
		player1: points.home,
		player2: points.away,
	};
};
exports.handler = async (event, context) => {
	context.callbackWaitsForEmptyEventLoop = false;

	try {
		const data = JSON.parse(event.body);
		const id = mongoose.Types.ObjectId();

		const player1 = await Player.findOne({ psn: data.player1 });
		const player2 = await Player.findOne({ psn: data.player2 });
		const playersMatch = await Match.find({ $and: [{ player1: player1.psn }, { player2: player2.psn }] });

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
		const results = matchResult(match);

		const player1Updated = await Player.updateOne(
			{ psn: data.player1 },
			{
				points: player1.points + points.player1,
				matches_count: player1.matches_count + 1,
				goals_scored: player1.goals_scored + match.home,
				goals_conceded: player1.goals_conceded + match.away,
				wins: player1.wins + results.home,
				draws: player1.draws + results.draw,
				loses: player1.loses + results.away,
			}
		);
		const player2Updated = await Player.updateOne(
			{ psn: data.player2 },
			{
				points: player2.points + points.player2,
				matches_count: player2.matches_count + 1,
				goals_scored: player2.goals_scored + match.away,
				goals_conceded: player2.goals_conceded + match.home,
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
