import { Component, OnInit } from '@angular/core';
import { ArtisteService } from 'app/services/artiste/artiste.service';
import { AlbumService } from 'app/services/album/album.service';
import { MusiqueService } from 'app/services/musique/musique.service';
import { Artiste } from 'bean/artiste';
import { Musique } from 'bean/musique';
import { Album } from 'bean/album';
@Component({
    selector: 'app-create-music',
    templateUrl: './create-music.component.html',
    styleUrls: ['./create-music.component.css']
})
export class CreateMusicComponent implements OnInit {

    artisteList: Artiste[];
    albumList: Album[];
    selectedArtist: Artiste;
    selectedAlbum: Album;
    musicName: string;
    date: Date;
    link:string;

    constructor(private artisteService: ArtisteService, private musicService: MusiqueService, private albumService: AlbumService) { }

    async ngOnInit() {
        this.artisteList = await this.artisteService.getAllArtists()
    }

    async onArtistChange() {
        this.albumList = await this.artisteService.getAlbumsByArtist(this.selectedArtist.id)
    }

    submitMusic() {
        var music: Musique;
        if (this.musicName && this.date && this.link) {
            music = {
                id: null,
                titre: this.musicName,
                annee: this.date,
                idAlbum: this.selectedAlbum.id,
                artiste: this.selectedArtist,
                link: this.link
            }
            console.log(this.selectedAlbum)

            console.log(music)
            var response = this.musicService.addMusic(music)
            console.log("response : ", response)
        }

    }

}
