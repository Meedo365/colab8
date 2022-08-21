const mongoose = require('mongoose');

const TweetSchema = new mongoose.Schema({
    tweetText: { type: String, required: true },
    likes: { type: Number, default: 0 },
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: "users"
    }
    // event_id: {
    //     type: mongoose.Types.ObjectId,
    //     ref: "events"
    // }
},
    { timestamps: true });

const Tweet = mongoose.model("tweets", TweetSchema);

module.exports = Tweet;




