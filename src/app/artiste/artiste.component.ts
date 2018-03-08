import { Component, OnInit } from '@angular/core';
import {ArtisteService} from '../services/artiste/artiste.service';
import {Artiste} from 'bean/artiste'

@Component({
  selector: 'app-artiste',
  templateUrl: './artiste.component.html',
  styleUrls: ['./artiste.component.css']
})
export class ArtisteComponent implements OnInit {
    artisteList : Artiste[];
  constructor(private artisteService : ArtisteService) { }

  async ngOnInit() {
      var vm = this;
      var response = await this.artisteService.getAllArtists().then((response)=>{
          vm.artisteList = response;

      });
  }

}
