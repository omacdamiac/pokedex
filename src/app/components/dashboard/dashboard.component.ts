import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Userinterface } from "../../models/userinterface";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'Pokedex';
  cols: number;
  user: Userinterface;

  constructor(private _api_auth: AuthService) { }

  ngOnInit() {
    this.cols = (window.innerWidth <= 400) ? 3 : 6;
    this.user = this._api_auth.getCurrentUser();
    console.log(this.user);
  }

  //RESPONSIVE MAT-GRID-LIST
  onResize(event){
    this.cols = (event.target.innerWidth <= 400) ? 3 : 6;
  }

}
