import { Component, OnInit } from '@angular/core';
import { PokemonService } from "../../services/pokemon.service";
import { ActivatedRoute } from "@angular/router";
import { Pokemonlist, PokemonCG, PokemonE } from "../../models/pokemonlist";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(private _poke: PokemonService, private route: ActivatedRoute) { }
  pokemon: any;
  pokemon_des_gen: Array<PokemonCG> = [];  
  pokemon_evo: Array<PokemonE> = [];;
  ngOnInit() {
    this.getDetails();
  }

  getDetails(){
    const id = +this.route.snapshot.paramMap.get('id');
    this._poke.getPokemonId(id).subscribe(data => {
      this.pokemon = data;

      //console.log(data.species.url)
        this._poke.getPokemonUrl(data['species']['url']).subscribe(data2 => {
          //this.pokemon_des_gen = data2;
          this.pokemon_des_gen.push<PokemonCG>({'descripcion': data2['flavor_text_entries']['3']['flavor_text'], 'genero': data2['genera']['3']['genus']});


          this._poke.getPokemonUrl(data2['evolution_chain']['url']).subscribe(data3 => {
            // for (var evo = 0; evo < array.length; evo++) {
              this.pokemon_evo.push<PokemonE>({'name': data3['chain']['evolves_to'][0]['species']['name'] });              
            // }
            console.log(this.pokemon_evo);
          });
        });

  });

  }

}
