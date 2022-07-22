const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    fullname: { type: String, required: false },
    facebookUrl: { type: String, required: false },
    twitterUrl: { type: String, required: false },
    instagramUrl: { type: String, required: false },
    intrest: { type: Array, required: true },
    funFacts: { type: String, required: true },
     image: { type: String, required: false },
    age: { type: String, required: false },
    gender: { type: String, required: false },
    active: { type: Boolean, default: false }
},
    { timestamps: true })

const User = mongoose.model('users', UserSchema);

module.exports = User;
