const mongoose = require('mongoose')
const Schema = mongoose.Schema;

module.exports = mongoose.model('Artist', new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    nickName: {
        type: String,
        required: true
    }
}))