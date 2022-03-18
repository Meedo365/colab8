const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    fullname: { type: String, required: false },
    facebookUrl: { type: String, required: false },
    twitterUrl: { type: String, required: false },
    instagramUrl: { type: String, required: false },
    intrest: { type: String, required: true },
    funFacts: { type: String, required: true },
    url: { type: String, required: true },
    age: { type: String, required: true },
    gender: { type: String, required: true },
    active: { type: Boolean, default: false }
},
    { timestamps: true })

const User = mongoose.model('users', UserSchema);

module.exports = User;
