import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isUserLoggedIn=false;
  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.isUserLoggedIn){
        return true;
      }else{
        this.router.navigate(['login']);
        return false;
      }
    
  }
  saveUserName(){
    this.isUserLoggedIn=true;
  }
  currentUser(){
    return sessionStorage.getItem('user')
  }
  deleteUserName(){
    this.isUserLoggedIn=false;
    sessionStorage.removeItem('user');
    this.router.navigate(['login']);
  }
  
}
