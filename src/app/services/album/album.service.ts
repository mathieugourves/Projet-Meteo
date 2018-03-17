import { Injectable } from '@angular/core';
import { Album } from 'bean/album'
import { environment } from 'environments/environment';

@Injectable()
export class AlbumService {

    constructor() { }

    async getAllAlbums() {
        console.log("getAllAlbums")
        var url = `${environment.API_URL}/${environment.SUFFIX_API_ALBUMS}`;
        var result = await fetch(url, {
            method: 'get'
        });
        var json = await result.json();
        console.log(json);
        return json.map((album) => new Album(album));
    }

    async addAlbum(newAlbum: Album) {
        console.log("addAlbum")
        var url = `${environment.API_URL}/${environment.SUFFIX_API_ALBUM}`;
        var result = await fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newAlbum)
        });

        var json = await result.json();
        return json.map((album) => new Album(album));
    }
}
