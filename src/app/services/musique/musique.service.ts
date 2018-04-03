import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Musique } from 'bean/musique';
import { Comment } from 'bean/comment';

@Injectable()
export class MusiqueService {

    constructor() { }

    async getAllMusiques() {
        var url = `${environment.API_URL}/${environment.SUFFIX_API_MUSICS}`;
        var result = await fetch(url, {
            method: 'get'
        });
        var json = await result.json();
        return json.map((musique) => new Musique(musique));
    }

    async getMusique(id) {
        var url = `${environment.API_URL}/${environment.SUFFIX_API_MUSIC}/${id}`;
        var result = await fetch(url, {
            method: 'get'
        });
        var json = await result.json();
        return new Musique(json);
    }

    async getMusicsByArtist(id) {
        var url = `${environment.API_URL}/${environment.SUFFIX_API_ARTIST}/${id}/${environment.SUFFIX_API_MUSICS}`;
        var result = await fetch(url, {
            method: 'get'
        });
        var json = await result.json();
        return json.map((musique) => new Musique(musique));
    }

    async getMusicsByAlbum(id) {
        var url = `${environment.API_URL}/${environment.SUFFIX_API_ALBUMS}/${id}/${environment.SUFFIX_API_MUSICS}`;
        var result = await fetch(url, {
            method: 'get'
        });
        var json = await result.json();
        return json.map((musique) => new Musique(musique));
    }

    async addMusic(newMusic: Musique) {
        console.log("addMusic")
        var url = `${environment.API_URL}/${environment.SUFFIX_API_MUSIC}`;
        var result = await fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newMusic)
        });

        var json = await result.json();
        return json.map((music) => new Musique(music));
    }

    async getAllComments(id) {
        var url = `${environment.API_URL}/${environment.SUFFIX_API_MUSIC}/${id}/${environment.SUFFIX_API_COMMENTS}`;
        var result = await fetch(url, {
            method: 'get'
        });
        var json = await result.json();
        return json.map((comment) => new Comment(comment));
    }

    async addComment(id, content) {
        var url = `${environment.API_URL}/${environment.SUFFIX_API_MUSIC}/${id}/${environment.SUFFIX_API_COMMENT}`;
        var result = await fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            },
            body: JSON.stringify({ content: content })
        });
        return new Comment(await result.json());
    }
}
