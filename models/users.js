const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    fullname: { type: String, required: false },
    image: { type: String, required: false },
    facebookUrl: { type: String, required: false },
    twitterUrl: { type: String, required: false },
    instagramUrl: { type: String, required: false },
    intrest: { type: Array, required: false },
    funFacts: { type: String, required: true },
    age: { type: Date, required: false },
    gender: { type: String, required: false },
    active: { type: Boolean, default: false }
},
    { timestamps: true });

// UserSchema.statics.findAndValidate = async function (email, password) {
//     const foundUser = await this.findOne({ email });
//     const isValid = await bcrypt.compare(password, foundUser.password);
//     return isValid ? foundUser : false;
// };


// UserSchema.pre('save', async function (next) {
//     if (!this.isModified('password')) return next();
//     this.password = await bcrypt.hash(this.password, 12);
//     next();
// });

const User = mongoose.model('users', UserSchema);

module.exports = User;