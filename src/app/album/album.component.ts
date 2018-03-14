import { Component, OnInit } from '@angular/core';
import {Musique} from 'bean/musique'
import {Artiste} from 'bean/artiste'
import {Album} from 'bean/album'
import {AlbumService} from '../services/album/album.service';

@Component({
    selector: 'app-album',
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
    albumList: Album[];
  constructor(private albumService  :AlbumService) { }

  async ngOnInit() {
      var vm = this;
      var response = await this.albumService.getAllAlbums().then((response)=>{
          vm.albumList = response;

      });
  }

}
