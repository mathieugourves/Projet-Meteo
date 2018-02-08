var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

// ouverture base

var mongoose = require('mongoose');
var db = mongoose.createConnection('localhost', 'test');

// creation du schema

var schema = mongoose.Schema({ nom: 'string', prenom: 'string' });
var Utilisateur = db.model('Utilisateur', schema);

// lancement du serveur

var server = app.listen(port, function() {
	console.log('Express server listening on port ' + port);
});
