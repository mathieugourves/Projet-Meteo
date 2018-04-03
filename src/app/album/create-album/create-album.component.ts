import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ArtisteService } from 'app/services/artiste/artiste.service';
import { MusiqueService } from 'app/services/musique/musique.service';
import { AlbumService } from 'app/services/album/album.service';
import { Artiste } from 'bean/artiste';
import { Album } from 'bean/album';
@Component({
    selector: 'app-create-album',
    templateUrl: './create-album.component.html',
    styleUrls: ['./create-album.component.css']
})
export class CreateAlbumComponent implements OnInit {
    artisteList: Artiste[];
    selectedArtist: Artiste;
    albumName: string;
    date: Date;
    constructor(private artisteService: ArtisteService, private albumService: AlbumService, private router: Router) { }

    async ngOnInit() {
        this.artisteList = await this.artisteService.getAllArtists()
    }
    submitAlbum() {
        var album: Album;
        if (this.albumName && this.date) {
            album = {
                id: null,
                titre: this.albumName,
                annee: this.date,
                artiste: this.selectedArtist
            }
            try {
                var album = this.albumService.addAlbum(album)
                console.log(album)
                this.router.navigate(['listAlbum/']);
            } catch (err) {
                console.log("error : ", err)
            }
        }
    }
}
