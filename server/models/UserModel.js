const mongoose = require('mongoose')
const Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;

var schema = new Schema({
    login: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
})

schema.pre('save', function (next) {
    let user = this
    if (!user.isModified('password'))
        next()

    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err)
            return next(err)

        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err)
                return next(err)

            user.password = hash
            next()
        })
    })
})

schema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', schema)