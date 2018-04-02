var express = require('express')
var router = express.Router()
const Artist = require('./models/ArtistModel.js')
const Album = require('./models/AlbumModel.js')
const Music = require('./models/MusicModel.js')
const Note = require('./models/NoteModel.js')

function api(passport, connector) {

    router.route('/musics')
        .get(function (req, res) {
            connector.getMusics().then(res.json)
        })

    router.route('/music/:id')
        .get(function (req, res) {
            connector.getMusic(req.params.id).then(res.json)
        })

    router.route('/artists')
        .get(function (req, res) {
            connector.getArtists().then(res.json)
        })

    router.route('/artist/:id')
        .get(function (req, res) {
            connector.getArtist(req.params.id).then(res.json)
        })

    router.route('/artists/:filter')
        .get(function (req, res) {
            connector.getArtistByFilter(req.params.filter).then(res.json)
        })

    router.route('/albums')
        .get(function (req, res) {
            connector.getAlbums().then(res.json)
        })

    router.route('/artist/:id/musics')
        .get(function (req, res) {
            connector.getMusicsByArtist(req.params.id).then(res.json)
        })

    router.route('/albums/:id/musics')
        .get(function (req, res) {
            connector.getMusicsByAlbum(req.params.id).then(res.json)
        })

    router.route('/artist/:id/musics')
        .get(function (req, res) {
            connector.getMusicsByArtist(req.params.id).then(res.json)
        })

    router.route('/artists/:id/albums')
        .get(function (req, res) {
            connector.getAlbumsByArtist(req.params.id).then(res.json)
        })

    router.route('/artist/')
        .post(passport.authenticate('jwt', {
            session: false
        }), function (req, res) {
            var artist = new Artist({
                firstName: req.body.firstname,
                lastName: req.body.lastname,
                nickName: req.body.stagename
            })
            connector.addArtist(artist).then(res.json)
        })

    router.route('/album/')
        .post(function (req, res) {
            var album = new Album({
                name: req.body.titre,
                date: req.body.annee,
                votesCount: req.body.votesCount,
                votesSum: req.body.votesSum,
                artist: req.body.artiste.id
            })

            connector.addAlbum(album).then(res.json)
        })

    router.route('/music/')
        .post(function (req, res) {
            var music = new Music({
                name: req.body.titre,
                date: req.body.annee,
                votesCount: req.body.votesCount,
                votesSum: req.body.votesSum,
                artist: req.body.artiste.id,
                album: req.body.idAlbum,
                link: req.body.link
            })
            connector.addMusic(music).then(res.json)
        })

    router.route('/note/:id')
        .get(function (req, res) {
            connector.getNoteByItem(req.params.id).then(res.json)
        })

    router.route('/note/')
        .post(passport.authenticate('jwt', {
            session: false
        }), function (req, res) {
            var note = new Note({
                value: req.body.value,
                kind: req.body.kind,
                item: req.body.item,
                user: req.user._id
            })
            connector.addNote(note).then(res.json)
        })

    return router
}

getToken = function (headers) {
    if (headers && headers.authorization) {
        var parted = headers.authorization.split(' ')
        if (parted.length === 2) {
            return parted[1]
        } else {
            return null
        }
    } else {
        return null
    }
}

module.exports = api