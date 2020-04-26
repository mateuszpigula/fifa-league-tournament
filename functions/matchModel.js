const mongoose = require("mongoose");

// Set Product Schema
const matchSchema = new mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	player1: {
		type: String,
		required: [true, "Player1 field is required"],
	},
	player2: {
		type: String,
		required: [true, "Player1 field is required"],
	},
	home: {
		type: Number,
		required: [true, "Home score field is required"],
	},
	away: {
		type: Number,
		required: [true, "Away score field is required"],
	},
});

module.exports = mongoose.models.match || mongoose.model("match", matchSchema);
