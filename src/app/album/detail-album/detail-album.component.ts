import { Component, OnInit } from '@angular/core';
import { ArtisteService } from 'app/services/artiste/artiste.service';
import { MusiqueService } from 'app/services/musique/musique.service';
import { AlbumService } from 'app/services/album/album.service';
import { Artiste } from 'bean/artiste';
import { Musique } from 'bean/musique';
import { Album } from 'bean/album';

@Component({
  selector: 'app-detail-album',
  templateUrl: './detail-album.component.html',
  styleUrls: ['./detail-album.component.css']
})
export class DetailAlbumComponent implements OnInit {
    artisteList: Artiste[];
    musicList: Musique[];
    albumList: Album[];
    selectedArtist: Artiste;
    selectedAlbum: Album;
  constructor(private artisteService: ArtisteService, private musicService: MusiqueService, private albumService: AlbumService) { }

  async ngOnInit() {
      var vm = this;
      this.artisteList = await this.artisteService.getAllArtists()
  }
  async onArtistChange(){
     this.albumList = await this.artisteService.getAlbumsByArtist(this.selectedArtist.id)
  }
  async onAlbumChange(){
      this.musicList = await this.musicService.getMusicsByAlbum(this.selectedAlbum.id)
  }

}
