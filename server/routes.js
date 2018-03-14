const express = require('express')
const MongoConnector = require('./connector')
const path = require("path")
const auth = require('./auth')
const api = require('./api')

const dbHost = "localhost"
const dbPort = 27017
const dbName = "MusicDB"
const dbOptions = require('./db-credentials.json')
const dist = path.join(__dirname, '..', 'dist')

module.exports = function (app, router, passport) {

    let connector = new MongoConnector(dbHost, dbPort, dbName, dbOptions)

    app.use('/auth', auth(passport))

    app.use('/api', api(passport, connector))

    app.use(express.static(dist))

    app.get('*', function (req, res) {
        res.sendFile('index.html', {
            root: dist
        })
    })
}
