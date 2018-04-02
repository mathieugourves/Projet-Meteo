import { Artiste } from 'bean/artiste';

export class Musique {

    id: string;
    titre: string;
    annee: Date;
    idAlbum: string;
    artiste: Artiste;
    link: string;

    constructor(item: any) {
        this.id = item._id;
        this.titre = item.name;
        this.annee = new Date(item.date);
        this.artiste = new Artiste(item.artist);
        this.link = item.link;
    }
}
