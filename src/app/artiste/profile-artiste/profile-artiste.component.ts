import { Component, OnInit } from '@angular/core';
import {ArtisteService} from 'app/services/artiste/artiste.service';
import {MusiqueService} from 'app/services/musique/musique.service';
import {Artiste} from 'bean/artiste';
import {Musique} from 'bean/musique'

@Component({
  selector: 'app-profile-artiste',
  templateUrl: './profile-artiste.component.html',
  styleUrls: ['./profile-artiste.component.css']
})
export class ProfileArtisteComponent implements OnInit {
    artisteList : Artiste[];
    selectedArtist : Artiste;
    musicList : Musique[];
    constructor(private artisteService : ArtisteService,private musicService :MusiqueService) { }

 async ngOnInit() {
      var vm = this;
      var response = await this.artisteService.getAllArtists().then((response)=>{
          vm.artisteList = response;
      });
  }
  //Fonction load les musiques d'un artiste
  //mettre en async await
  async onSelectChange(){
  console.log("coucou")
  var vm = this;
    var response = await this.musicService.getMusicsByArtist(this.selectedArtist.id).then((response)=>{
        vm.musicList  =response;
    })
 }

}
