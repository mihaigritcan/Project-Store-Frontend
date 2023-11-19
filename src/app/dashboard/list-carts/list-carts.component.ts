import { Component } from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Item} from "../../models/Item";

@Component({
  selector: 'app-list-carts',
  templateUrl: './list-carts.component.html',
  styleUrls: ['./list-carts.component.css']
})
export class ListCartsComponent {
  carts:Array<any> = [];

  constructor(private cartService: CartService) {
    this.cartService.getAllCartsFromServer().subscribe((carts: Array<any>) => {
      this.carts = carts;

      console.log(carts);
    });
  }

  calculateTotalCart(items: Array<Item>): number {
    let total = 0;

    for(let item of items) {
      total += Number(item.price);
    }

    return total;
  }

  deleteCart(cart: any) {
    this.cartService.deleteCart(cart.id);
  }
}
