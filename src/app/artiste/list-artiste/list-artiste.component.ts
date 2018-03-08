import { Component, OnInit } from '@angular/core';
import {ArtisteService} from 'app/services/artiste/artiste.service';
import {Artiste} from 'bean/artiste'

@Component({
  selector: 'app-list-artiste',
  templateUrl: './list-artiste.component.html',
  styleUrls: ['./list-artiste.component.css']
})
export class ListArtisteComponent implements OnInit {
    artisteList : Artiste[];
    searchedArtist : string;
    constructor(private artisteService : ArtisteService) { }

    async ngOnInit() {
      var vm = this;
      var response = await this.artisteService.getAllArtists().then((response)=>{
          vm.artisteList = response;

      });
    }
    searchArtist(){
        console.log("Search Artist")
        console.log(this.searchedArtist)
    }
}
