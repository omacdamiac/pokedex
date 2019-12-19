import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Location } from "@angular/common";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  constructor(private _api_auth: AuthService, private location: Location) { }
  public isLogged = false;

  ngOnInit() {
    this.onCheckUser();
  }

  onCheckUser(): void {
    if (this._api_auth.getCurrentUser() === null) {
      this.isLogged = false;
    } else {
      this.isLogged = true;
    }
  }

}
