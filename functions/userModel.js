const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	username: {
		type: String,
		required: [true, "Username is required"],
		unique: true,
	},
	password: {
		type: String,
		required: [true, "Password is required"],
	},
});

module.exports = mongoose.models.user || mongoose.model("user", userSchema);
