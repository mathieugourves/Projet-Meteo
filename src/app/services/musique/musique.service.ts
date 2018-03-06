import { Injectable } from '@angular/core';
import {environment} from 'environments/environment';
import {Musique} from 'bean/musique'

    const APIURL = "http://localhost:3000/api";
    const SUFFIXAPIGETALLMUSICS = "/musics";

@Injectable()
export class MusiqueService {

  constructor() { }

  async getAllMusiques(){
      var url = environment.APIURL +""+environment.SUFFIXAPIGETALLMUSICS;
      var result =  await fetch(url, {
          method: 'get'
      });
      var json = await result.json();
      console.log(json)
      return json.map((musique) =>new Musique(musique));
  }

}
