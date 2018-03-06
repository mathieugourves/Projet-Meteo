const mongoose = require('mongoose')
const Music = require('./models/MusicModel.js')
const Artist = require('./models/ArtistModel.js')

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
    console.log(uri)

    mongoose.connect(uri)

    this.getMusics = () => Music.find({}).populate('artist').exec()

    this.getArtists = () => Artist.find({}).exec()

    this.getMusicsByArtist = (id) => Music.find({
        artist: mongoose.Types.ObjectId(id)
    }).exec()

}
