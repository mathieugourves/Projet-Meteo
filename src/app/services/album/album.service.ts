import { Injectable } from '@angular/core';
import { Album } from 'bean/album'
import { environment } from 'environments/environment';

@Injectable()
export class AlbumService {

    constructor() { }

    async getAllAlbums() {
        console.log("getAllAlbums")
        var url = environment.APIURL + "" + environment.SUFFIXAPIGETALLALBUMS;
        var result = await fetch(url, {
            method: 'get'
        });
        var json = await result.json();
        return json.map((album) => new Album(album));
    }
}
