const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

// Initialize connection to database
console.log("process.env.DB_URL", process.env.DB_URL);
const dbUrl = process.env.DB_URL;
const dbOptions = {
	useNewUrlParser: true,
	useFindAndModify: false,
	useUnifiedTopology: true,
};

// Set DB from mongoose connection
mongoose.connect(dbUrl, dbOptions);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

export default db;
