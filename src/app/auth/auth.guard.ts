import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from "../services/user.service";


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  public constructor(private router: Router, private userService: UserService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(!this.userService.isUserLoggedIn()) {
      this.router.navigate(['auth']);
      return false;
    }

    return true;
  }

}
