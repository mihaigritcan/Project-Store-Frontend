import {Component, Input} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {FavoriteService} from "../../services/favorite.service";
import {FavoriteDialogComponent} from "../favorite-dialog/favorite-dialog.component";

@Component({
    selector: 'app-favorite-button',
    templateUrl: './favorite-button.component.html',
    styleUrls: ['./favorite-button.component.css']
})
export class FavoriteButtonComponent {
    @Input("itemCount") itemCount: number = 0;

    constructor(public dialog: MatDialog, private favoriteService: FavoriteService) {
        this.favoriteService.getFavorite().subscribe((items: Array<any>) => {
            this.itemCount = items.length;
        });
    }

    openFavoriteDialog(): void {
        const dialogRef = this.dialog.open(FavoriteDialogComponent);

        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
