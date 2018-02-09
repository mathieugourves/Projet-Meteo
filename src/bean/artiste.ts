export class Artiste {
    constructor(
      public id: string,
      public nom: string,
      public prenom: string,
      public nomArtiste:string
    ) {
     console.log('création Artiste '+nomArtiste);
    }
  }
