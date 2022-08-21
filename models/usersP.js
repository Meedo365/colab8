const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const UserpSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        unique: true
    }
},
    { timestamps: true });

UserpSchema.plugin(passportLocalMongoose)

const Userp = mongoose.model('Usersp', UserpSchema);

module.exports = Userp;