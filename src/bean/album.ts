import { Artiste } from 'bean/artiste';

export class Album {

    id: string;
    titre: string;
    annee: Date;
    votesSum: number;
    votesCount: number;
    artiste: Artiste;

    constructor(item: any) {
        this.id = item._id;
        this.titre = item.name;
        this.annee = item.date;
        this.votesSum = item.votesSum;
        this.votesCount = item.votesCount;
        this.artiste = new Artiste(item.artist);
    }
}
