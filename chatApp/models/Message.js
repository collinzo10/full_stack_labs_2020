const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
	timestamp: {
		type: Date,
		default: Date.now
	},
	username: String,
	message: String,
	room: String
});

module.exports = mongoose.model('Message', MessageSchema);
