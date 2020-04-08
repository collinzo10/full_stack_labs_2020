const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoomLogSchema = new Schema({
	timestamp: {
		type: Date,
		default: Date.now
	},
	username: String,
	room: String,
	type: String
});

module.exports = mongoose.model('RoomLog', RoomLogSchema);
