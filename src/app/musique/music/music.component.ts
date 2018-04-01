import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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

    constructor(private route: ActivatedRoute, private musiqueService: MusiqueService, private sanitizer: DomSanitizer) { }

    ngOnInit() {
        this.route.params.subscribe(async params => {
            var id = params['id'];
            var response = await this.musiqueService.getMusique(id);
            this.music = response;
        });
    }

    watchToEmbed(link: string) {
        var url = link.replace(/\s*[a-zA-Z\/\/:\.]*youtube.com\/watch\?v=([a-zA-Z0-9\-_]+)([a-zA-Z0-9\/\*\-\_\?\&\;\%\=\.]*)/i, 'https://www.youtube.com/embed/$1');
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
