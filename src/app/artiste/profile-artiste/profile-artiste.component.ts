import { Component, OnInit } from '@angular/core';
import {ArtisteService} from 'app/services/artiste/artiste.service';
import {MusiqueService} from 'app/services/musique/musique.service';
import {AlbumService} from 'app/services/album/album.service';
import {Artiste} from 'bean/artiste';
import {Musique} from 'bean/musique';
import {Album} from 'bean/album';

@Component({
  selector: 'app-profile-artiste',
  templateUrl: './profile-artiste.component.html',
  styleUrls: ['./profile-artiste.component.css']
})
export class ProfileArtisteComponent implements OnInit {
    artisteList : Artiste[];
    selectedArtist : Artiste;
    musicList : Musique[];
    albumList : Album[]
    constructor(private artisteService : ArtisteService,private musicService :MusiqueService,private albumService : AlbumService) { }

 async ngOnInit() {
      var vm = this;
      var response = await this.artisteService.getAllArtists().then((response)=>{
          vm.artisteList = response;
      });
      response = await this.musicService.getAllMusiques().then((response)=>{
          vm.musicList = response;
      });
  }
  //Fonction load les musiques d'un artiste
  //mettre en async await
  async onSelectChange(){
      var vm = this;
        var response = await this.albumService.getAlbumsByArtist(this.selectedArtist.id).then((response)=>{
            vm.albumList  =response;
        })
        console.log(this.albumList)
  }

}
