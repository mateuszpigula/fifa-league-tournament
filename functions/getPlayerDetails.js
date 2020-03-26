import mongoose from "mongoose";

// Load the server
import db from "./server";

// Load the Product Model
import Player from "./playerModel";
import Match from "./matchModel";

exports.handler = async (event, context) => {
	context.callbackWaitsForEmptyEventLoop = false;

	try {
		const playerPsn = event.queryStringParameters.id;
		const player = await Player.findOne({ psn: playerPsn });
		const playerMatches = await Match.find({ $or: [{ player1: playerPsn }, { player2: playerPsn }] });

		const response = {
			msg: "Successfully got player info",
			data: { player, playerMatches },
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
