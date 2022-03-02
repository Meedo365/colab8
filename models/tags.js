const mongoose = require('mongoose');

const TagSchema = new mongoose.Schema({
    tagName: { type: String, required: true }
},
    { timestamps: true })

const Tag = mongoose.model('tags', TagSchema);

module.exports = Tag;