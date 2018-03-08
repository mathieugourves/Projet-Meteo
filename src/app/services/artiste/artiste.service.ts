import { Injectable } from '@angular/core';
import {environment} from 'environments/environment';
import {Artiste} from 'bean/artiste'

@Injectable()
export class ArtisteService {

  constructor() { }
  async getAllArtists(){
      console.log("getAllArtists")
      var url = environment.APIURL +""+environment.SUFFIXAPIGETALLARTISTS;
      var result =  await fetch(url, {
          method: 'get'
      });
      var json = await result.json();
      console.log(json)
      return json.map((artiste) =>new Artiste(artiste));
  }
}
