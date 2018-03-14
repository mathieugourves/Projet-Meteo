var express = require('express')
var router = express.Router()

function api(passport,connector) {

    router.route('/musics')
        .get(function (req, res) {
                connector.getMusics()
                    .then((result) => res.json(result))

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

    router.route('/artist/:id/musics')
        .get(function (req, res) {
            connector.getMusicsByArtist(req.params.id)
                .then((result) => res.json(result))
        })

    router.route('/artists/:id/albums')
        .get(function (req, res) {
            connector.getAlbumsByArtist(req.params.id)
                .then((result) => res.json(result))
        })

    router.route('/albums/:id/:vote')
        .put(function (req, res) {
            connector.setAlbumVote(req.params.id, req.params.vote)
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
