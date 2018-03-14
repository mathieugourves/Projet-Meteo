import { Component, OnInit } from '@angular/core';
import { ArtisteService } from 'app/services/artiste/artiste.service';
import { MusiqueService } from 'app/services/musique/musique.service';
import { AlbumService } from 'app/services/album/album.service';
import { Artiste } from 'bean/artiste';
import { Musique } from 'bean/musique';
import { Album } from 'bean/album';

@Component({
    selector: 'app-profile-artiste',
    templateUrl: './profile-artiste.component.html',
    styleUrls: ['./profile-artiste.component.css']
})
export class ProfileArtisteComponent implements OnInit {
    artisteList: Artiste[];
    selectedArtist: Artiste;
    albumsData : AlbumContent[];
    musicList: Musique[];
    albumList: Album[]
    constructor(private artisteService: ArtisteService, private musicService: MusiqueService, private albumService: AlbumService) { }

    async ngOnInit() {
        this.albumsData = []
        var vm = this;
        var response = await this.artisteService.getAllArtists().then((response) => {
            vm.artisteList = response;
        });
        response = await this.musicService.getAllMusiques().then((response) => {
            vm.musicList = response;
        });
    }
    //Fonction load les musiques d'un artiste
    //mettre en async await
    async onSelectChange() {
        var vm = this;
        var response = await this.artisteService.getAlbumsByArtist(this.selectedArtist.id).then((response) => {
            vm.albumList = response;
        })
        this.albumList.forEach(async(album)=>{
            console.log("In Foreach")
            var res = await this.musicService.getMusicsByAlbum(album.id)
            vm.musicList = res;

            var albumContent : AlbumContent;
            albumContent = new AlbumContent(album,vm.musicList);
            this.albumsData.push(albumContent)
            console.log(albumContent)
        }) 
    }
    getMusicListOfAlbum(idAlbum){
        var musicListOfAlbum : Musique[];
        this.albumsData.forEach((albumContent)=>{
            if(albumContent.album.id == idAlbum){
                musicListOfAlbum = albumContent.musicList;
            }
        })
        return musicListOfAlbum;
    }
  }
  class AlbumContent{
      album : Album;
      musicList : Musique[];
      constructor(album : Album,musicList : Musique[]){
          this.album = album;
          this.musicList = musicList;
      }
}
