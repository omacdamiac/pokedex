import { Component, OnInit } from '@angular/core';
import { PokemonService } from "../../services/pokemon.service";
import { ActivatedRoute } from "@angular/router";
import { Pokemonlist } from "../../models/pokemonlist";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(private _poke: PokemonService, private route: ActivatedRoute) { }
  pokemon: Array<Pokemonlist[]> = [];
  //favoritos: Array = [];
  //favorito: Array = [];
  // pokemon_des_gen: Array<PokemonCG[]> = [];  
  // pokemon_evo: Array<PokemonE[]> = [];;
  ngOnInit() {
    this.getDetails();
    //this.getListFavorite();
    console.log(this.pokemon);
  }

  getDetails(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this._poke.getPokemonId(id).subscribe(data => {

        this._poke.getPokemonUrl(data['species']['url']).subscribe(data2 => {
          //this.pokemon_des_gen.push<Pokemonlist[]>({descripcion: data2['flavor_text_entries']['3']['flavor_text'], genero: data2['genera']['3']['genus']});

          this._poke.getPokemonUrl(data2['evolution_chain']['url']).subscribe(data3 => {
              //this.pokemon_evo.push({name: data3['chain']['evolves_to'][0]['species']['name'] });    
              this.pokemon.push<Pokemonlist[]>( {id: data['id'], name: data['name'], image: data['sprites']['front_default'], types: data['types'], height: data['height'], weight: data['weight'], abilities: data['abilities'], evolucion: data3['chain']['evolves_to'][0]['species']['name'], genero: data2['genera']['3']['genus'], descripcion: data2['flavor_text_entries']['3']['flavor_text'], favorito: false });
              localStorage.removeItem('pokemon');
              // if (Object.prototype.hasOwnProperty.call(localStorage, 'pokemon') == false) {
              //   var myJson = JSON.stringify(this.pokemon);
              //   localStorage.setItem('pokemon', myJson);
              //   this.pokemon = this.pokemon;
                
              // } else {
              //   var obj = JSON.parse(localStorage.getItem('pokemon'));
              //   this.pokemon = obj;
              // }
          })
        })

    });
  }
  
}