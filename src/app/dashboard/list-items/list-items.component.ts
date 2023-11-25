import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Item} from "../../models/Item";
import {ItemService} from "../../services/item.service";
import {CartService} from "../../services/cart.service";
import {FavoriteService} from "../../services/favorite.service";

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent {
  @Input("showAdmin") showAdmin: boolean = false;
  @Output() changeData: EventEmitter<Item> = new EventEmitter<Item>();

  itemsList: Array<Item> = [];

  constructor(private itemService: ItemService,
              private cartService: CartService,
              private favoriteService: FavoriteService) {
  }

  ngOnInit() {
    this.itemService.getItemList().subscribe((itemsList: Array<Item>) => {
      this.itemsList = itemsList;
    });
  }


  onDelete(item: Item): void {
    console.log(item);
    this.itemService.deleteItem(item.id!);
  }

  onEdit(item: Item): void {
    console.log("item list on edit")
    console.log(item);
    this.changeData.emit(item);
  }

  onAddToCart(item: Item): void {
    console.log("item was added to cart")
    console.log(item)
    this.cartService.addToCart(item);
  }

  onFavorite(item: Item) {
    console.log("item was added to favorite")
    console.log(item)
    this.favoriteService.addToFavorite(item);
  }
}
