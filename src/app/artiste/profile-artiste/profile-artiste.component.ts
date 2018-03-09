import { Component, OnInit } from '@angular/core';
import {ArtisteService} from 'app/services/artiste/artiste.service';
import {Artiste} from 'bean/artiste'

@Component({
  selector: 'app-profile-artiste',
  templateUrl: './profile-artiste.component.html',
  styleUrls: ['./profile-artiste.component.css']
})
export class ProfileArtisteComponent implements OnInit {
    artisteList : Artiste[];
    selectedArtist : Artiste;
    constructor(private artisteService : ArtisteService) { }

 async ngOnInit() {
      var vm = this;
      var response = await this.artisteService.getAllArtists().then((response)=>{
          vm.artisteList = response;
          console.log("ici ",response)
      });
  }
  //Fonction load les musiques d'un artiste
  onSelectChange(){

 }

}
