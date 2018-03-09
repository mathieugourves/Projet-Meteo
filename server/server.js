const express = require('express')
const bodyParser = require('body-parser')
const MongoConnector = require('./connector.js')
const fs = require('fs')
const path = require("path")

const dbOptions = require('./db-credentials.json')
const port = process.env.PORT || 3000
const dbHost = "localhost"
const dbName = "MusicDB"
const dbPort = 27017
const app = express()
const router = express.Router()
const dist = path.join(__dirname, '..', 'dist')

let connector = new MongoConnector(dbHost, dbPort, dbName, dbOptions)

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use('/api', router)

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
    .get(function(req,res){
        connector.getArtist(req.params.idArtist)
            .then((result)=> res.json(result))
    })
router.route('/artists/:filter')
    .get(function(req,res){
        connector.getArtistByFilter(req.params.filter)
            .then((result)=>{
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

app.use(express.static(dist))

app.get('*', function (req, res) {
    res.sendFile('index.html', {
        root: dist
    });
});

console.log("Server Start on port ",port)
app.listen(port)
