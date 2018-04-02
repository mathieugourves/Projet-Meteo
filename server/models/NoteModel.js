const mongoose = require('mongoose')
const Schema = mongoose.Schema

var note = new Schema({
    value: {
        type: Number,
        required: true
    },
    kind: {
        type: String,
        required: true
    },
    item: {
        type: Schema.Types.ObjectId,
        refPath: 'kind',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

note.index({
    item: 1,
    user: 1
}, {
    unique: true
})

module.exports = mongoose.model('Note', note)