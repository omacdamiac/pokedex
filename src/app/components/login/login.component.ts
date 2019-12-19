import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Userinterface } from "../../models/userinterface";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { isError } from 'util';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _api_auth: AuthService, private router: Router, private location: Location){}
  public user: Userinterface = {
    user: '',
    password: ''
  };

  public isError = false;

  ngOnInit(){}

  onLogin(form: NgForm){
    if (form.valid) {
      return this._api_auth.loginUser(this.user.user, this.user.password).subscribe(data => {
        this._api_auth.setUser(data.user);
        this.router.navigate(['/home']);
        location.reload();
        this.isError = false;
      },
      error => this.onIsError()
      );
    } else {
      this.onIsError();
    }
  }

  onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 2000);
  }

}
