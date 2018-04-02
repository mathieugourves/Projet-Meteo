const mongoose = require('mongoose')
const Schema = mongoose.Schema;

module.exports = mongoose.model('Album', new Schema({
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
    }
}))