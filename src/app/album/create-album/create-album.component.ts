import { Component, OnInit } from '@angular/core';
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
    albumName : string;
    date : Date;
  constructor(private artisteService: ArtisteService,private albumService: AlbumService) { }

  async ngOnInit() {
      this.artisteList = await this.artisteService.getAllArtists()
  }
  submitAlbum(){
      var album : Album;
      if(this.albumName && this.date){
          album = {
            id:null,
            titre : this.albumName,
            annee : this.date,
            votesSum : 0,
            votesCount : 0,
            artiste : this.selectedArtist
          }
          console.log(album)
          var response = this.albumService.addAlbum(album)
          console.log("response : ",response)
      }

  }

}
