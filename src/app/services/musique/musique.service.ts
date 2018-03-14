import { Injectable } from '@angular/core';
import {environment} from 'environments/environment';
import {Musique} from 'bean/musique'


@Injectable()
export class MusiqueService {

  constructor() { }

  async getAllMusiques(){
      var url = environment.APIURL +""+environment.SUFFIXAPIGETALLMUSICS;
      var result =  await fetch(url, {
          method: 'get'
      });
      var json = await result.json();
      return json.map((musique) =>new Musique(musique));
  }
  async getMusicsByArtist(id){
      var url = environment.APIURL +""+environment.SUFFIXAPIGETMUSICSBYARTIST1+""+id+""+environment.SUFFIXAPIGETMUSICSBYARTIST2;
      var result =  await fetch(url, {
          method: 'get'
      });
      var json = await result.json();
      return json.map((musique) =>new Musique(musique));
  }
  async getMusicsByAlbum(id){
      var url = environment.APIURL +""+environment.SUFFIXAPIGETALLALBUMS+"/"+id+""+environment.SUFFIXAPIGETALLMUSICS;
      var result =  await fetch(url, {
          method: 'get'
      });
      var json = await result.json();
      return json.map((musique) =>new Musique(musique));
  }

}
