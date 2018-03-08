const mongoose = require('mongoose')
const Schema = mongoose.Schema;

module.exports = mongoose.model('Album', new Schema({
    name: String,
    date: Date,
    votesCount: Number,
    votesSum: Number
}))