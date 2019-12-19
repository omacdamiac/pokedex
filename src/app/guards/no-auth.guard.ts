import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {  AuthService } from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
  constructor(private _api_auth: AuthService, private router: Router){}
  
    canActivate(){
      if (this._api_auth.getCurrentUser()) {
        this.router.navigate(['/home']);
        
        return false;
      } else {
        return true;
      }
    }
  
}
