import {Component} from '@angular/core';
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";
import {ItemService} from "../services/item.service";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  search : String ="";
  title: string = environment.appName;
  owner: string = environment.appOwner;
  items: Array<any> = [
    {
      title: 'Home',
      route: '/home',
    },
    {
      title: 'Admin',
      route: '/dashboard',
    },
    {
      title: 'Logout',
      route: '/auth',
    },
  ];
  imageSalesLeft: string = 'assets/ban.jpg';
  imageSalesMiddle: string = 'assets/BANNER11.jpg';
  imagelogo:string ='assets/logo111.jpg';

  constructor(private router: Router,private itemService:ItemService,userService:UserService) {
  this.owner=userService.getUser().username;
  }

  // onChangePage(page: any) {
  //   console.log(page);
  //   this.router.navigateByUrl(page.route);
  // }

  onLogout(): void {
    this.router.navigateByUrl('/auth')
  }
  onHome(){
    this.router.navigateByUrl('/home')
  }
  onAdmin(){
    this.router.navigateByUrl('/dashboard')
  }
onSelectCategory(category:string) {
    console.log(category);
    this.itemService.readItemsByCategory(category);
}

}
