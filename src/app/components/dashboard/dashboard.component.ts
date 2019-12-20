import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Userinterface } from "../../models/userinterface";
import { Pokemonlist } from "../../models/pokemonlist";
import { PokemonService } from "../../services/pokemon.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'Pokedex';
  cols: number;
  cdr: any;
  mobile: any = '1:1.8';
  desktop: any = '1:1.4';
  user: Userinterface;
  pokemonList: Array<Pokemonlist> = [];
  //servicio pokemons
  pokemons:any;

  constructor(private _api_auth: AuthService, private _poke: PokemonService) { }

  ngOnInit() {
    //responsive
    this.cols = (window.innerWidth <= 400) ? 3 : 8;
    this.cdr = (window.innerWidth <= 400) ? this.mobile : this.desktop;

    this.user = this._api_auth.getCurrentUser();
    console.log(this.user);
    this.getListPokemon();
  }

  getListPokemon(){
    this._poke.getAllPokemons().subscribe(data => {
      this.pokemons = data['results'];
      // console.log(this.pokemons);
      for (var poke = 0; poke < data['results'].length; poke++) {
        this._poke.getPokemonUrl(data['results'][poke]['url']).subscribe(data2 => {
           //console.log(data2);
          this.pokemonList.push<Pokemonlist>({'id':data2['id'], 'name': data2['name'], 'type': data2['types'], 'image': data2['sprites']});
        })}
    });
    console.log(this.pokemonList);
  }

  //RESPONSIVE MAT-GRID-LIST
  onResize(event){
    this.cols = (event.target.innerWidth <= 400) ? 3 : 6;
  }

}
