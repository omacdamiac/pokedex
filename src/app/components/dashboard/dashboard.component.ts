import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'Pokedex';
  cols: number;

  constructor() { }

  ngOnInit() {
    this.cols = (window.innerWidth <= 400) ? 3 : 6;
  }

  //RESPONSIVE MAT-GRID-LIST
  onResize(event){
    this.cols = (event.target.innerWidth <= 400) ? 3 : 6;
  }

}
