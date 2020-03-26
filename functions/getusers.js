import mongoose from "mongoose";
const axios = require("axios");
require("dotenv").config();

exports.handler = function(event, context, callback) {
	mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
	const db = mongoose.connection;
	db.on("error", console.error.bind(console, "connection error:"));
	db.once("open", function() {
		console.log("We've connected!");
	});

	const API_URL = "https://api.github.com/users";
	const API_CLIENT_ID = "e742bf0c149057de162a";
	const API_CLIENT_SECRET = "73f5ada7916209bf8b2ea64434c3ea0a0ede7a7c";

	const URL = `${API_URL}?client_id=${API_CLIENT_ID}&client_secret=${API_CLIENT_SECRET}`;

	const send = body => {
		callback(null, {
			statusCode: 200,
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
			},
			body: JSON.stringify(body),
		});
	};

	const getUsers = () => {
		axios
			.get(URL)
			.then(res => send(res.data))
			.catch(err => send(err));
	};

	if (event.httpMethod === "GET") {
		// getUsers();
		send({ name: "jeff" });
	}
};
