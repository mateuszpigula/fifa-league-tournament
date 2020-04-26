import mongoose from "mongoose";

// Load the server
import db from "./server";

// Load the Product Model
import Player from "./playerModel";

exports.handler = async (event, context) => {
	context.callbackWaitsForEmptyEventLoop = false;

	try {
		const players = await Player.find();
		const samePoints = {};
		players.sort((a, b) => b.points - a.points);
		players.map((player) => {
			samePoints[player.points] = samePoints[player.points] ? [...samePoints[player.points], player.psn] : [player.psn];
			return player;
		});

		const response = {
			msg: "Players successfully found",
			data: players.sort((a, b) => {
				if (b.points !== a.points) {
					return b.points - a.points;
				}
				const a_balance = a.goals_scored - a.goals_conceded;
				const b_balance = b.goals_scored - b.goals_conceded;

				return b_balance - a_balance;
			}),
			sorted: samePoints,
		};

		return {
			statusCode: 200,
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(response),
		};
	} catch (err) {
		// console.log(err); // output to netlify function log
		return {
			statusCode: 500,
			body: JSON.stringify({ msg: err.message }),
		};
	}
};
