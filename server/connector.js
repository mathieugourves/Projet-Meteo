const mongoose = require('mongoose')
const Music = require('./models/MusicModel.js')
const Artist = require('./models/ArtistModel.js')
const Album = require('./models/AlbumModel.js')

module.exports = function (host, port, dbName, options) {
    this.host = host
    this.dbName = dbName
    this.port = port
    this.options = options

    var self = this

    var credentials = this.options.user + ':' + this.options.pass
    var address = this.host + ':' + this.port
    var options = 'authSource=' + this.options.authSource + '&poolSize=5'
    var uri = 'mongodb://' + credentials + '@' + address + '/' + this.dbName + '?' + options

    mongoose.connect(uri)

    this.getMusics = () => Music.find({}).populate('artist').populate('album').exec()

    this.getArtists = () => Artist.find({}).exec()

    this.getAlbums = () => Album.find({}).exec()

    this.getMusicsByArtist = (id) => Music.find({
        artist: mongoose.Types.ObjectId(id)
    }).exec()

    this.getMusicsByAlbum = (id) => Music.find({
        album: mongoose.Types.ObjectId(id)
    }).exec()

}