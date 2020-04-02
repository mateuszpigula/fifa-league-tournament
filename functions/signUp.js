import mongoose from "mongoose";

import db from "./server";

import User from "./userModel";

exports.handler = async (event, context) => {
	context.callbackWaitsForEmptyEventLoop = false;

	try {
		const data = JSON.parse(event.body);
		const id = mongoose.Types.ObjectId();
		const user = {
			...data,
			_id: id,
			__v: 0,
		};

		await User.create(user);

		const response = {
			msg: "User successfully signed up!",
		};

		return {
			statusCode: 201,
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(response),
		};
	} catch (err) {
		return {
			statusCode: 500,
			body: JSON.stringify({ msg: err.message }),
		};
	}
};
