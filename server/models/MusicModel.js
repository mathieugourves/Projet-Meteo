const mongoose = require('mongoose')
const Schema = mongoose.Schema;

module.exports = mongoose.model('Music', new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    artist: {
        type: Schema.Types.ObjectId,
        ref: 'Artist'
    },
    album: {
        type: Schema.Types.ObjectId,
        ref: 'Album'
    },
    link: {
        type: String,
        required: false
    }
}))