const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    commentText: { type: String, required: true },
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

const Comment = mongoose.model("comments", CommentSchema);

module.exports = Comment;



