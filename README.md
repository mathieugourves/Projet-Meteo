# MusicProject
## Lancement de MusicProject
Pour installer correctement le projet avant de l'utiliser :
    - Lancer mongo :  mongod --auth --dbpath "directoryPathForMongoBDD"
    - npm install   Recuperation des dépendances
    - npm run seed  Insertion en BDD
    - node server/server.js
    - ng build --watch ou  npm run watch
    - aller sur http://localhost:3000/

## Structure des tables en base de donnée

Notre application posséde 5 tables dans sa base de données Mongo :
    - Artiste
    - Album
    - Musique
    - Commentaire
    - Utilisateur

## Fonctionnalités implémenter
    - Inscription
    - Connexion / Déconnexion
    - Création (Musique/Album/Artiste)
    - Récupération en BDD (Musique/Album/Artiste)
    - Acces restreint aux utilisateur pour la Création
    - Création de commentaires
    - Fonction de recherche par Artiste
