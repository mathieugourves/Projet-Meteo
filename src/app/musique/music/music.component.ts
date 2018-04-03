import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'app/services/auth/auth.service';
import { MusiqueService } from 'app/services/musique/musique.service';
import { Musique } from 'bean/musique'
import { Comment } from 'bean/comment'

@Component({
    selector: 'app-music',
    templateUrl: './music.component.html',
    styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

    music: Musique;
    comments: Array<Comment>;
    commentData = { commentField: '' };

    constructor(private route: ActivatedRoute, private musiqueService: MusiqueService, private sanitizer: DomSanitizer, private auth: AuthService) { }

    ngOnInit() {
        this.route.params.subscribe(async params => {
            var id = params['id'];
            var response = await this.musiqueService.getMusique(id);
            this.music = response;
            this.comments = await this.musiqueService.getAllComments(id);
        });
    }

    async sendComment() {
        var response = await this.musiqueService.addComment(this.music.id, this.commentData.commentField);
        this.comments.unshift(response);
        this.commentData.commentField = '';
    }

    watchToEmbed(link: string) {
        var url = link.replace(/\s*[a-zA-Z\/\/:\.]*youtube.com\/watch\?v=([a-zA-Z0-9\-_]+)([a-zA-Z0-9\/\*\-\_\?\&\;\%\=\.]*)/i, 'https://www.youtube.com/embed/$1');
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
