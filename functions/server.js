const mongoose = require("mongoose");
require("dotenv").config();

// Initialize connection to database
const dbUrl = process.env.DB_URL;
const dbOptions = {
	useNewUrlParser: true,
	useFindAndModify: false,
};

// Set DB from mongoose connection
mongoose.connect(dbUrl, dbOptions);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

export default db;
