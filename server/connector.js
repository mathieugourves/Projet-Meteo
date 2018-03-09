const mongoose = require('mongoose')
const Music = require('./models/MusicModel.js')
const Artist = require('./models/ArtistModel.js')
const Album = require('./models/AlbumModel.js')
const User = require('./models/UserModel.js')

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
    getArtistByFilter(filter){
        let valARequeter = new RegExp(filter,"i");
        return Artist.find({
            nickName: valARequeter
        }).exec()
    }

    getArtist(idArtist){
        return Artist.find({
            _id: mongoose.Types.ObjectId(idArtist)
        }).exec()
    }
    getArtists() {
        return Artist.find({}).exec()
    }

    getAlbums() {
        return Album.find({}).exec()
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

}
