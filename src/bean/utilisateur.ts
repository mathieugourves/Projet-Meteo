export class Utilisateur {
    constructor(
      public id: string,
      public identifiant: string,
      public motDePasse: string,
      public isArtiste:boolean
    ) {
     console.log('création Utilisateur '+identifiant);
    }
  }
