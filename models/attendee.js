const mongoose = require('mongoose');

const AttendeeSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: "users"
    },
    event_id: {
        type: mongoose.Types.ObjectId,
        ref: "events"
    }
},
    { timestamps: true });

const Attendee = mongoose.model("attendees", AttendeeSchema);

module.exports = Attendee;
