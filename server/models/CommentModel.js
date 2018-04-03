const mongoose = require('mongoose')
const Schema = mongoose.Schema;

module.exports = mongoose.model('Comment', new Schema({
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    music: {
        type: Schema.Types.ObjectId,
        ref: 'Music'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}))