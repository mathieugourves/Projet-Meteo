import { Component, OnInit } from '@angular/core';
import {MusiqueService} from '../services/musique/musique.service';
import {Musique} from 'bean/musique'
import {Artiste} from 'bean/artiste'
@Component({
  selector: 'app-musique',
  templateUrl: './musique.component.html',
  styleUrls: ['./musique.component.css']
})
export class MusiqueComponent implements OnInit {
    musicList: Musique[];
  constructor(private musiqueService : MusiqueService) { }

  async ngOnInit() {
      var vm = this;
      var response = await this.musiqueService.getAllMusiques().then((response)=>{
          vm.musicList = response;

      });
      console.log("Resultat recu : ",this.musicList)
  }

}
