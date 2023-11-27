import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ItemService} from "../../services/item.service";
import {UserService} from "../../services/user.service";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
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

  constructor(private router: Router,private itemService:ItemService,userService:UserService) {
    this.owner=userService.getUser().username;
  }

  onSelectCategory(category:string) {
    console.log(category);
    this.itemService.readItemsByCategory(category);
  }
}
