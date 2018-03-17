import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Artiste } from 'bean/artiste'
import { Album } from 'bean/album'

@Injectable()
export class ArtisteService {

    constructor() { }

    async getAllArtists() {
        console.log("getAllArtists")
        var url = `${environment.API_URL}/${environment.SUFFIX_API_ARTISTS}`;
        var result = await fetch(url, {
            method: 'get'
        });
        var json = await result.json();
        console.log(json)
        return json.map((artiste) => new Artiste(artiste));
    }

    async getArtistsByFilter(filter) {
        console.log("getArtistsByFilter")
        if (filter) {
            var url = `${environment.API_URL}/${environment.SUFFIX_API_ARTISTS}/${filter}`;
            var result = await fetch(url, {
                method: 'get'
            });
            var json = await result.json();
            return json.map((artiste) => new Artiste(artiste));
        }
        return {};
    }

    async getArtist(id) {
        console.log("getArtist")

        if (id) {
            var url = `${environment.API_URL}/${environment.SUFFIX_API_ARTIST}/${id}`;
            var result = await fetch(url, {
                method: 'get'
            });
            var json = await result.json();
            return json.map((artiste) => new Artiste(artiste));
        }

        return {};
    }

    async getAlbumsByArtist(id) {
        console.log("getAlbumsByArtist")
        var url = `${environment.API_URL}/${environment.SUFFIX_API_ARTISTS}/${id}/${environment.SUFFIX_API_ALBUMS}`;
        var result = await fetch(url, {
            method: 'get'
        });
        var json = await result.json();
        return json.map((album) => new Album(album));
    }

    async addArtist(newArtist: Artiste) {
        console.log("addArtist")
        var url = `${environment.API_URL}/${environment.SUFFIX_API_ARTIST}`;
        var result = await fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newArtist)
        });

        var json = await result.json();
        return json.map((artiste) => new Artiste(artiste));
    }
}
