import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Userinterface } from "../../models/userinterface";
import { Pokemonlist } from "../../models/pokemonlist";
import { PokemonService } from "../../services/pokemon.service";
import { FilterPipe } from "ngx-filter-pipe";
import { OrderPipe } from "ngx-order-pipe";

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

  finishPage = 49;
  actualPage: number;
  offset: number = 0;
  numberPokemon: number = 20;
  servicesStatus = false;

  user: Userinterface;
  pokemonList: Array<Pokemonlist> = [];
  pokemons:any;

  order: string = name;
  reverse: boolean = false;
  sortList: any[];

  pokemonFilter: any = {name: ''};

  constructor(private _api_auth: AuthService, private _poke: PokemonService, private filterPipe: FilterPipe, private orderPipe: OrderPipe){
    this.actualPage = 1;
    this.sortList = orderPipe.transform(this.pokemonList, 'name');

    console.log(filterPipe.transform(this.pokemonList, { name: 'B'}));    
  }

  ngOnInit() {
    //responsive
    this.cols = (window.innerWidth <= 400) ? 3 : 8;
    this.cdr = (window.innerWidth <= 400) ? this.mobile : this.desktop;

    this.user = this._api_auth.getCurrentUser();

    // si no existe el array lo llamo
    if (localStorage.getItem('nuevo')) {
     this.pokemonList = JSON.parse(localStorage.getItem('nuevo'));
      //console.log('existe');
    }else{
      this.getListPokemon();
    }
  }

  getListPokemon(){
    this.servicesStatus = true;
    this._poke.getAllPokemons(this.offset, this.numberPokemon).subscribe(data => {
      this.pokemons = data['results'];
      // console.log(this.pokemons);
      for (var poke = 0; poke < data['results'].length; poke++) {
        this._poke.getPokemonUrl(data['results'][poke]['url']).subscribe(data2 => {
          this.pokemonList.push<Pokemonlist>({'id':data2['id'], 'name': data2['name'], 'type': data2['types'], 'image': data2['sprites']['front_default'], favorito: false});
          localStorage.setItem('nuevo', JSON.stringify(this.pokemonList));
        })
      }  
      this.servicesStatus = false;
      this.offset = this.offset + this.numberPokemon;
   })
  }

   getFavorite(id: number): void{
     this.pokemonList = JSON.parse(localStorage.getItem('nuevo'));
     for (var n = 0; n < this.pokemonList.length; n++) {
        if (this.pokemonList[n].id == id) {
        this.pokemonList[n].favorito = !this.pokemonList[n].favorito;

         localStorage.setItem('nuevo', JSON.stringify(this.pokemonList));   
        }
     }
  }
//   assignCopy(){
//     this.pokemonList = Object.assign([], this.pokemonList);
//  }

//   filterPokemon(textValue: string){
//       if(!textValue) this.assignCopy();
//       this.pokemonList = Object.assign([], this.pokemonList).filter(
//         item => item.name.toLowerCase().indexOf(textValue.toLowerCase()) > -1
//       )
//   }

  //SCROLL
  onScroll(){
    if (this.servicesStatus == false) {
      if (this.actualPage < this.finishPage) {
        this.getListPokemon();
        this.actualPage ++;
      } else {
        console.log('Fin');
      } 
    }
  }

  //Order
  setOrder(value: string){
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }

  //RESPONSIVE MAT-GRID-LIST
  onResize(event){
    this.cols = (event.target.innerWidth <= 400) ? 3 : 6;
  }

}