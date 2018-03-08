const mongoose = require('mongoose')
const Schema = mongoose.Schema;

module.exports = mongoose.model('Music', new Schema({
    name: String,
    date: Date,
    votesCount: Number,
    votesSum: Number,
    artist: {
        type: Schema.Types.ObjectId,
        ref: 'Artist'
    },
    album: {
        type: Schema.Types.ObjectId,
        ref: 'Album'
    }
}))