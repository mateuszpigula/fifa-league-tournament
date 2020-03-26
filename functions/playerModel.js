const mongoose = require("mongoose");

// Set Product Schema
const playerSchema = new mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	name: {
		type: String,
		required: [true, "Name field is required"],
		max: 100,
	},
	psn: {
		type: String,
		required: [true, "Psn field is required"],
	},
	club: {
		name: {
			type: String,
			required: [true, "Club name field is required"],
		},
		logo: {
			type: String,
			default: "",
		},
	},
	stats: {
		points: {
			type: Number,
			default: 0,
		},
		matches_count: {
			type: Number,
			default: 0,
		},
	},
});

module.exports = mongoose.models.player || mongoose.model("player", playerSchema);
