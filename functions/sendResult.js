import mongoose from "mongoose";

// Load the server
import db from "./server";

// Load the Product Model
const Player = require("./playerModel");
const Match = require("./matchModel");

const assignPoints = data => {
	const { match1, match2 } = data;

	const countMatch = match => {
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
		const points = assignPoints(data);
		const player1 = await Player.findOne({ psn: data.player1 });
		const player2 = await Player.findOne({ psn: data.player2 });

		const match = {
			...data,
			_id: id,
			__v: 0,
		};

		await Match.create(match);

		const player1Updated = await Player.updateOne(
			{ psn: data.player1 },
			{
				stats: {
					points: player1.stats.points + points.player1,
					matches_count: player1.stats.matches_count + 2,
				},
			}
		);
		const player2Updated = await Player.updateOne(
			{ psn: data.player2 },
			{
				stats: {
					points: player2.stats.points + points.player2,
					matches_count: player2.stats.matches_count + 2,
				},
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
