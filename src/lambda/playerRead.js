import mongoose from "mongoose";

// Load the server
import db from "./server";

// Load the Product Model
import Player from "./playerModel";

exports.handler = async (event, context) => {
	context.callbackWaitsForEmptyEventLoop = false;

	try {
		const players = await Player.find();
		players.sort((a, b) => a.psn.localeCompare(b.psn));

		const response = {
			msg: "Players successfully found",
			data: players.sort((a, b) => b.stats.points - a.stats.points),
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
