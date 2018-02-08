export class Album {
    constructor(
      public id: string,
      public titre: string,
      public annee: any,
      public idArtiste:string,
      public idPochette:string,
      public idNote:string
    ) {
     console.log('création Album '+titre);
    }
  }
