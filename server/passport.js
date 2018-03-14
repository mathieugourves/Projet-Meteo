const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const config = require('./config.json')

const User = require('./models/UserModel')

module.exports = function (passport) {

    var opts = {}
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt")
    opts.secretOrKey = config.secret

    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        User.findById(jwt_payload._id, function (err, user) {
            done(err, user)
        })
    }))
}