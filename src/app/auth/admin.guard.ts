import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {Injectable} from "@angular/core";
import {UserService} from "../services/user.service";
import {Observable} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  public constructor(private router: Router, private userService: UserService) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.userService.getUser().userRole != 'ADMIN') {
      this.router.navigate(['/', 'home']);
      return false;
    }

    return true;
  }

}
