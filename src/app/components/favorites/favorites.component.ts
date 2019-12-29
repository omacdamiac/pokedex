import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  nueva: any;
  favoritos: any;
  cols: number;
cdr: any;
mobile: any = '1:1.8';
desktop: any = '1:1.4';

  constructor( private _poke: PokemonService) { }

  ngOnInit() {
    //responsive
    this.cols = (window.innerWidth <= 400) ? 3 : 8;
    this.cdr = (window.innerWidth <= 400) ? this.mobile : this.desktop;
    this.getFavorito();
  }


  getFavorito(){
    this.nueva = JSON.parse(localStorage.getItem('nuevo'));
    for (var fav = 0; fav < this.nueva.length; fav++) {
        this.favoritos = this.nueva.map((item, index, array) => {
          if(item.favorito == true){
            
          return item;
        }})
      
    }
    console.log(this.favoritos);
  }

  }
