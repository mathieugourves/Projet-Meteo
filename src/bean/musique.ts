import {Artiste} from 'bean/artiste';
export class Musique {
    id: string
    titre: string
    annee: any
    idAlbum: string
    artiste: Artiste
    votesCount: number
    votesSum : number

    constructor(item: any){
        this.id = item._id;
        this.titre = item.name;
        this.annee = item.date;
        this.votesCount = item.votesCount;
        this.artiste  = new Artiste(item.artist[0]);
        this.votesSum = item.votesSum;
    }
  }
