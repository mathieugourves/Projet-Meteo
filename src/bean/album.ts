import { Artiste } from 'bean/artiste';

export class Album {

    id: string;
    titre: string;
    annee: Date;
    artiste: Artiste;

    constructor(item: any) {
        this.id = item._id;
        this.titre = item.name;
        this.annee = item.date;
        this.artiste = new Artiste(item.artist);
    }
}
