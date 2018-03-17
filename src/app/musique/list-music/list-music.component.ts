import { Component, OnInit } from '@angular/core';
import { MusiqueService } from 'app/services/musique/musique.service';
import { Musique } from 'bean/musique'
import { Artiste } from 'bean/artiste'

@Component({
    selector: 'app-list-music',
    templateUrl: './list-music.component.html',
    styleUrls: ['./list-music.component.css']
})
export class ListMusicComponent implements OnInit {

    musicList: Musique[];

    constructor(private musiqueService: MusiqueService) { }

    async ngOnInit() {
        var response = await this.musiqueService.getAllMusiques()
        this.musicList = response;
    }

}
