export class Morceau {
    constructor(
      public id: string,
      public titre: string,
      public annee: any,
      public idAlbum:string,
      public idArtiste:string,
      public idNote:string;
    ) {
     console.log('création Morceau '+titre);
    }
  }
