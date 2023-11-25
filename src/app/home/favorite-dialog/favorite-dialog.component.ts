import { Component } from '@angular/core';
import {Item} from "../../models/Item";
import {FavoriteService} from "../../services/favorite.service";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-favorite-dialog',
  templateUrl: './favorite-dialog.component.html',
  styleUrls: ['./favorite-dialog.component.css']
})
export class FavoriteDialogComponent {
  items:Array<any> = [];
  constructor(private favoriteService: FavoriteService,private cartService:CartService) {
    this.favoriteService.getFavorite().subscribe((items: Array<any>) => {
      this.items = [];

      this.items = items;

      console.log(items)
    });
  }

  ngOnInit() {
    console.log('test');
  }

  public onDeleteFromFavorite(item: Item) {
    this.favoriteService.removeFromFavorite(item);
  }

  onAddToCart(item: Item): void {
    console.log("item was added to cart")
    console.log(item)
    this.cartService.addToCart(item);
    this.favoriteService.removeFromFavorite(item);
  }
  public onBuy() {
    this.favoriteService.createFavorite();
  }
}
