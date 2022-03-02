const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
	title: { type: String, required: false },
	about: { type: String, required: false },
	attendees: { type: String, required: true },
	date: { type: Date, required: true },
	time: { type: String, required: true },
	location: { type: String, required: true },
	tags_id: {
		type: Array,
		default: [],
		ref: "tags"
	},
	// likes: { type: Number, default: 0 },
	comment_no: { type: Number, default: 0 }
},
	{ timestamps: true });

const Event = mongoose.model("events", EventSchema);

module.exports = Event;