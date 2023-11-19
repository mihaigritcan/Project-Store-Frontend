import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Item} from "../../models/Item";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.css']
})
export class CartDialogComponent implements OnInit {
  items:Array<any> = [];

  constructor(private cartService: CartService) {
    this.cartService.getCart().subscribe((items: Array<any>) => {
      this.items = [];

      this.items = items;

      console.log(items)
    });
  }

  ngOnInit() {
    console.log('test');
  }

  public onDeleteCart(item: Item) {
    this.cartService.removeFromCart(item);
  }

  public onBuy() {
    this.cartService.createCart()
  }
}
