const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConnectionSchema = new Schema({
	connectedAt: {
		type: Date,
		default: Date.now
	},
	username: {
		type: String,
		default: 'Anonymous'
	},
	disconnectedAt: {
		type: Date,
		default: null
	}
});

module.exports = mongoose.model('Connection', ConnectionSchema);
