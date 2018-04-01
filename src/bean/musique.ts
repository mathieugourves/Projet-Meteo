import { Artiste } from 'bean/artiste';

export class Musique {

    id: string;
    titre: string;
    annee: Date;
    idAlbum: string;
    artiste: Artiste;
    votesCount: number;
    votesSum: number;
    link: string;

    constructor(item: any) {
        this.id = item._id;
        this.titre = item.name;
        this.annee = new Date(item.date);
        this.votesCount = item.votesCount;
        this.artiste = new Artiste(item.artist);
        this.votesSum = item.votesSum;
        this.link = item.link;
    }
}
