const mongoose = require('mongoose')
const Schema = mongoose.Schema;

module.exports = mongoose.model('Artist', new Schema({
    firstName: String,
    lastName: String,
    nickName: String
}))