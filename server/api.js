var express = require('express')
var router = express.Router()

function api(passport) {

    router.route('/musics')
        .get(passport.authenticate('jwt', {
            session: false
        }), function (req, res) {
            var token = getToken(req.headers);
            if (token) {
                connector.getMusics()
                    .then((result) => res.json(result))
            } else {
                return res.status(403).send({
                    success: false,
                    msg: 'Non autorisé.'
                });
            }
        })

    router.route('/artists')
        .get(function (req, res) {
            connector.getArtists()
                .then((result) => res.json(result))
        })

    router.route('/artist/:idArtist')
        .get(function (req, res) {
            connector.getArtist(req.params.idArtist)
                .then((result) => res.json(result))
        })

    router.route('/artists/:filter')
        .get(function (req, res) {
            connector.getArtistByFilter(req.params.filter)
                .then((result) => {
                    res.json(result)
                })
        })

    router.route('/albums')
        .get(function (req, res) {
            connector.getAlbums()
                .then((result) => res.json(result))
        })

    router.route('/artist/:id/musics')
        .get(function (req, res) {
            connector.getMusicsByArtist(req.params.id)
                .then((result) => res.json(result))
        })

    router.route('/albums/:id/musics')
        .get(function (req, res) {
            connector.getMusicsByAlbum(req.params.id)
                .then((result) => res.json(result))
        })

    return router
}

getToken = function (headers) {
    if (headers && headers.authorization) {
        var parted = headers.authorization.split(' ');
        if (parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
};

module.exports = api