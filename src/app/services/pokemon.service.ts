import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private _http: HttpClient){}
  pokemon: any;

  getAllPokemons(){
    const url_api = 'https://pokeapi.co/api/v2/pokemon/';
    return this._http.get(url_api);
  }

  getPokemonUrl(url: string){
    const url_api = `${url}`;
    return (this.pokemon = this._http.get(url_api))
  }

}
