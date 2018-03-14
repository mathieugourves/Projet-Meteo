const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const config = require('./config.json')

const User = require('./models/UserModel')

function auth(passport) {

    router.route('/signin')
        .post(function (req, res) {
            User.findOne({
                login: req.body.login
            }, function (err, user) {
                if (err) throw err
                if (!user) {
                    res.status(401).send({
                        success: false,
                        msg: 'L\'authentification a échouée. L\'utilisateur n\'existe pas.'
                    })
                } else {
                    if (user.validPassword(req.body.password)) {
                        var token = jwt.sign(user.toJSON(), config.secret);
                        res.json({
                            success: true,
                            token: 'JWT ' + token
                        })
                    } else {
                        res.status(401).send({
                            success: false,
                            msg: 'L\'authentification a échouée. Mot de passe invalide.'
                        })
                    }
                }
            });
        })

    router.route('/signup')
        .post(function (req, res) {
            if (!req.body.login || !req.body.password) {
                res.json({
                    success: false,
                    msg: 'Veuillez entrer un nom d\'utilisateur et un mot de passe.'
                })
            } else {
                var newUser = new User({
                    username: req.body.login,
                    password: req.body.password
                })

                newUser.save(function (err) {
                    if (err) {
                        return res.json({
                            success: false,
                            msg: 'L\'utilisateur existe déjà.'
                        })
                    }
                    res.json({
                        success: true,
                        msg: 'Compte créé avec succès.'
                    })
                })
            }
        })

    router.route('/logout')
        .get(function (req, res) {

        })

    return router
}

function isAuthenticated(req, res, next) {

    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}

module.exports = auth