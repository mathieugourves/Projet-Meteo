import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusiqueService } from 'app/services/musique/musique.service';
import { Musique } from 'bean/musique'

@Component({
    selector: 'app-music',
    templateUrl: './music.component.html',
    styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

    music: Musique;

    constructor(private route: ActivatedRoute, private musiqueService: MusiqueService) { }

    ngOnInit() {
        this.route.params.subscribe(async params => {
            var id = params['id'];
            var response = await this.musiqueService.getMusique(id);
            this.music = response;
        });
    }

}
