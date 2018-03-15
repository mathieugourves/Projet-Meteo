import { Component, OnInit } from '@angular/core';
import {ArtisteService} from 'app/services/artiste/artiste.service';
import {Artiste} from 'bean/artiste'
@Component({
  selector: 'app-create-artist',
  templateUrl: './create-artist.component.html',
  styleUrls: ['./create-artist.component.css']
})
export class CreateArtistComponent implements OnInit {
    stagename : string;
    firstname : string;
    lastname  : string;
  constructor(private artistService : ArtisteService) { }

  ngOnInit() {
  }
    submitArtist(){
        var artist : Artiste;
        if(this.stagename && this.firstname && this.lastname){
            artist ={id:null, stagename : this.stagename,firstname : this.firstname,lastname : this.lastname}
            console.log(artist)
            var response = this.artistService.addArtist(artist)
            console.log("response : ",response)
        }

    }
}
