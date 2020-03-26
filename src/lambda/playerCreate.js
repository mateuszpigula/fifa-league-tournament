import mongoose from "mongoose";

// Load the server
import db from "./server";

// Load the Product Model
import Player from "./playerModel";

exports.handler = async (event, context) => {
	context.callbackWaitsForEmptyEventLoop = false;

	try {
		const data = JSON.parse(event.body);
		const id = mongoose.Types.ObjectId();
		const player = {
			...data,
			_id: id,
			__v: 0,
		};
		const response = {
			msg: "Player successfully created",
			data: player,
		};

		console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ exports.handler -> player", player);
		// Use Product.Model to create a new product
		await Player.create(player);

		return {
			statusCode: 201,
			body: JSON.stringify(response),
		};
	} catch (err) {
		console.log("player.create", err); // output to netlify function log

		return {
			statusCode: 500,
			body: JSON.stringify({ msg: err.message }),
		};
	}
};
