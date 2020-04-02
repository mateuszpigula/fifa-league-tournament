import mongoose from "mongoose";

import db from "./server";

import User from "./userModel";

exports.handler = async (event, context) => {
	context.callbackWaitsForEmptyEventLoop = false;

	try {
		const data = JSON.parse(event.body);
		const { username, password } = data;

		const checkIfExists = await User.find({ username, password });

		if (!checkIfExists.length) {
			return {
				statusCode: 404,
				body: JSON.stringify({ message: "Provided credentials not exist" }),
			};
		}

		return {
			statusCode: 200,
			headers: {
				"Set-Cookie": "LOGGED_IN=true; Max-Age=1200; Path=/",
			},
			body: JSON.stringify({ message: "You successfully logged in!" }),
		};
	} catch (err) {
		return {
			statusCode: 500,
			body: JSON.stringify({ message: err.message }),
		};
	}
};
