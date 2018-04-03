import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Artiste } from 'bean/artiste'
import { Album } from 'bean/album'

@Injectable()
export class ArtisteService {

    constructor() { }

    async getAllArtists() {
        var url = `${environment.API_URL}/${environment.SUFFIX_API_ARTISTS}`;
        var result = await fetch(url, {
            method: 'get'
        });
        var json = await result.json();
        return json.map((artiste) => new Artiste(artiste));
    }

    async getArtistsByFilter(filter) {
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
        var headers = new Headers({
            'Authorization': localStorage.getItem('jwtToken')
        });
        var url = `${environment.API_URL}/${environment.SUFFIX_API_ARTIST}`;
        var response = await fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('jwtToken')
            },
            body: JSON.stringify(newArtist)
        });

        if (response.ok) {
            var json = await response.json()
            return new Artiste(json);
        }
        throw new Error();
    }
}
