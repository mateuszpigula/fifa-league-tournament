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
		let goalsScored = 0;
		let goalsConceded = 0;
		playerMatches.map(match => {
			const homeOrAway = playerPsn === match.player1 ? "home" : "away";
			const opposite = homeOrAway === "home" ? "away" : "home";

			goalsScored += match.match1[homeOrAway] + match.match2[homeOrAway];
			goalsConceded += match.match1[opposite] + match.match2[opposite];
			return match;
		});

		await Player.updateOne(
			{ psn: playerPsn },
			{
				goals_scored: goalsScored,
				goals_conceded: goalsConceded,
			}
		);

		const response = {
			msg: "Successfully got player info",
			data: {
				player,
				playerMatches,
				goals: {
					goalsScored,
					goalsConceded,
				},
			},
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
