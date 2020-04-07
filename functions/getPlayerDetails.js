import mongoose from "mongoose";

// Load the server
import db from "./server";

// Load the Product Model
import Player from "./playerModel";
import Match from "./matchModel";
import { matchesResult } from "../src/utils/match";

exports.handler = async (event, context) => {
	context.callbackWaitsForEmptyEventLoop = false;

	try {
		const playerPsn = event.queryStringParameters.id;
		const player = await Player.findOne({ psn: playerPsn });
		const playerMatches = await Match.find({ $or: [{ player1: playerPsn }, { player2: playerPsn }] });
		let goalsScored = 0;
		let goalsConceded = 0;
		let wins = 0,
			draws = 0,
			loses = 0;

		playerMatches.map((match) => {
			const { match1, match2, player1 } = match;
			const homeOrAway = playerPsn === player1 ? "home" : "away";
			const opposite = homeOrAway === "home" ? "away" : "home";
			const results = matchesResult([match1, match2]);

			wins += results[homeOrAway];
			draws += results.draw;
			loses += results[opposite];
			goalsScored += match1[homeOrAway] + match2[homeOrAway];
			goalsConceded += match1[opposite] + match2[opposite];

			return match;
		});

		await Player.updateOne(
			{ psn: playerPsn },
			{
				goals_scored: goalsScored,
				goals_conceded: goalsConceded,
				wins,
				draws,
				loses,
			}
		);

		const response = {
			msg: "Successfully got player info",
			data: {
				player,
				playerMatches,
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
		console.log(err); // output to netlify function log
		return {
			statusCode: 500,
			body: JSON.stringify({ msg: err.message }),
		};
	}
};
