import { Component } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pokedex';
  constructor(private router:Router){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url.match('/login') || event.url.match('/home')) {
          this.hideElement = true;
          
        } else {
          this.hideElement = false;
        }
        
      }
    });
  }
  public hideElement = false;
  
}
