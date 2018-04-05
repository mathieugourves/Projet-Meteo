# MusicProject

## Mise en place de MusicProject

### Installation des dépendances

Lancer la commande :

    npm install

### Remplissage de la base avec des données de test

Lancer la base mongo sans authentification avec la commande :

    mongod

puis depuis le projet :

    npm run seed

### Lancement de l'application

Démarrer la base mongo avec l'authentification :

    mongod --auth --dbpath "pathToDB"

#### Compilation du code Angular

Pour compiler une fois :

    ng build

Pour compiler dynamiquement :

    ng build --watch

ou

    npm run watch

Lancer le serveur node avec :

    node ./server/server.js

Une fois le serveur démarrer le site est disponible via http://localhost:3000/

## Structure des tables en base de donnée

Notre application utilise 5 collections dans sa base de données Mongo :

### Artiste

```javascript
mongoose.model('Artist', new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    nickName: {
        type: String,
        required: true
    }
}))
```
### Album

```javascript
mongoose.model('Album', new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    artist: {
        type: Schema.Types.ObjectId,
        ref: 'Artist'
    }
}))
```
### Musique

```javascript
mongoose.model('Music', new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    artist: {
        type: Schema.Types.ObjectId,
        ref: 'Artist'
    },
    album: {
        type: Schema.Types.ObjectId,
        ref: 'Album'
    },
    link: {
        type: String,
        required: false
    }
}))
```
### Commentaire

```javascript
mongoose.model('Comment', new Schema({
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    music: {
        type: Schema.Types.ObjectId,
        ref: 'Music'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}))
```
### Utilisateur

```javascript
mongoose.model('User', new Schema({
    login: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
}))
```

## Fonctionnalités implémentées

- Inscription
- Connexion / Déconnexion
- Création (Musique/Album/Artiste)
- Récupération en BDD (Musique/Album/Artiste)
- Accès restreint aux utilisateurs pour la création
- Publication de commentaires
- Fonction de recherche par Artiste
