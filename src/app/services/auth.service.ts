import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/operators";
import { isNullOrUndefined } from "util";
import { Userinterface } from "../models/userinterface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _http: HttpClient) { }
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  loginUser(user: string, password: string): Observable<any>{
    const url_api = 'http://localhost:3000/Users?include=user';
    return this._http.post<Userinterface>(url_api, {user, password}, { headers: this.headers}).pipe(map(data => data));
  }

  setUser(user: Userinterface): void {
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string);
  }

  getCurrentUser(): Userinterface {
    let user_string = localStorage.getItem("currentUser");
    if (!isNullOrUndefined(user_string)) {
      let user: Userinterface = JSON.parse(user_string);
      return user;
    } else {
      return null;
    }
  }

  logoutUser(){
    const url_api = `http://localhost:3000/Users`;
    localStorage.removeItem("currentUser");
    return this._http.post<Userinterface>(url_api, { headers: this.headers });
  }

}
