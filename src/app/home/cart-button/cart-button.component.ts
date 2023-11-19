import {Component, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CartDialogComponent} from "../cart-dialog/cart-dialog.component";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-cart-button',
  templateUrl: './cart-button.component.html',
  styleUrls: ['./cart-button.component.css']
})
export class CartButtonComponent {
  @Input("itemCount") itemCount: number = 0;

  constructor(public dialog: MatDialog, private cartService: CartService) {
    this.cartService.getCart().subscribe((items: Array<any>) => {
      this.itemCount = items.length;
    });
  }

  openCartDialog(): void {
    const dialogRef = this.dialog.open(CartDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
