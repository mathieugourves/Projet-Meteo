const mongoose = require('mongoose')
const Music = require('./models/MusicModel.js')
const Artist = require('./models/ArtistModel.js')
const Album = require('./models/AlbumModel.js')
const User = require('./models/UserModel.js')
const Note = require('./models/NoteModel.js')
const Comment = require('./models/CommentModel.js')
var ObjectID = require('mongodb').ObjectID;

module.exports = class MongoConnector {

    constructor(host, port, dbName, options) {
        this.host = host
        this.dbName = dbName
        this.port = port
        this.options = options

        var credentials = this.options.user + ':' + this.options.pass
        var address = this.host + ':' + this.port
        var options = 'authSource=' + this.options.authSource + '&poolSize=5'
        var uri = 'mongodb://' + credentials + '@' + address + '/' + this.dbName + '?' + options

        mongoose.connect(uri)
    }

    addUser(login, password, date) {
        return User.create({
            login: login,
            password: password,
            date: date
        })
    }

    getUser(login) {
        return User.find({
            login: login
        }).exec()
    }

    getMusics() {
        return Music.find({}).populate('artist').populate('album').exec()
    }

    getMusic(id) {
        return Music.findOne({
            _id: mongoose.Types.ObjectId(id)
        }).populate('artist').populate('album').exec()
    }

    addArtist(artist) {
        return artist.save()
    }

    getArtistByFilter(filter) {
        let valARequeter = new RegExp(filter, "i");
        return Artist.find({
            nickName: valARequeter
        }).exec()
    }

    getArtist(id) {
        return Artist.find({
            _id: mongoose.Types.ObjectId(idArtist)
        }).exec()
    }

    getArtists() {
        return Artist.find({}).exec()
    }

    addAlbum(album) {
        return album.save()
    }

    getAlbums() {
        return Album.find({}).populate('artist').exec()
    }

    getAlbumsByArtist(idArtist) {
        return Album.find({
            artist: mongoose.Types.ObjectId(idArtist)
        }).exec()
    }

    getMusicsByArtist(id) {
        return Music.find({
            artist: mongoose.Types.ObjectId(id)
        }).exec()
    }

    getMusicsByAlbum(id) {
        return Music.find({
            album: mongoose.Types.ObjectId(id)
        }).exec()
    }

    addMusic(music) {
        return music.save()
    }

    setAlbumVote(id, vote) {
        return Album.update({
            _id: mongoose.Types.ObjectId(id)
        }, {
            $set: {
                votesSum: vote
            }
        }).exec()
    }

    getNoteAverage(id) {
        return Note.find({
                item: mongoose.Types.ObjectId(id)
            })
            .exec()
            .then(function (notes) {
                var sum = notes.reduce((a, b) => a + b.value, 0)
                return Promise.resolve({
                    note: sum / notes.length,
                    total: notes.length
                })
            })
    }

    getNote(id) {
        return Note.findById(mongoose.Types.ObjectId(id)).exec()
    }

    addNote(note) {
        return note.save()
    }

    editNote(id, value) {
        return Note.findByIdAndUpdate(mongoose.Types.ObjectId(id), {
            value: value
        }).exec()
    }

    deleteNote(id) {
        return Note.deleteOne({
            _id: mongoose.Types.ObjectId(id)
        }).exec()
    }

    getCommentByMusic(id) {
        return Comment.find({
            music: mongoose.Types.ObjectId(id)
        }).populate('user', ['login']).exec()
    }

    addComment(comment) {
        return comment.save()
    }
}