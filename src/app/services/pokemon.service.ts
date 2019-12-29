import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private _http: HttpClient){}
  pokemon: any;

  getAllPokemons(offset: number, numberPokemon: number){
    const url_api = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${numberPokemon}`;
    return this._http.get(url_api);
  }

  getPokemonUrl(url: string){
    const url_api = `${url}`;
    return (this.pokemon = this._http.get(url_api))
  }

  getPokemonId(id: number){
    const url_api = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return (this.pokemon = this._http.get(url_api));
  }

  getListFavorite(){
    const url_api = `https://pokeapi.co/api/v2/pokemon?filter[where][favorito]=true`;
    return (this.pokemon = this._http.get(url_api));
  }


}
