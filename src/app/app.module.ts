import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthComponent} from './auth/auth.component';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {DashboardComponent} from './dashboard/dashboard.component';
import {ListItemsComponent} from './dashboard/list-items/list-items.component';
import {AddEditItemComponent} from "./dashboard/add-edit-item/add-edit-item.component";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {AddEditUserComponent} from './dashboard/add-edit-user/add-edit-user.component';
import {ListUsersComponent} from './dashboard/list-users/list-users.component';
import {HomeComponent} from './home/home.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import { CartButtonComponent } from './home/cart-button/cart-button.component';
import { CartDialogComponent } from './home/cart-dialog/cart-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { ListCartsComponent } from './dashboard/list-carts/list-carts.component';
import {MatMenuModule} from "@angular/material/menu";
import { FavoriteButtonComponent } from './home/favorite-button/favorite-button.component';
import { FavoriteDialogComponent } from './home/favorite-dialog/favorite-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DashboardComponent,
    AddEditItemComponent,
    ListItemsComponent,
    AddEditUserComponent,
    ListUsersComponent,
    HomeComponent,
    CartButtonComponent,
    CartDialogComponent,
    ListCartsComponent,
    FavoriteButtonComponent,
    FavoriteDialogComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterOutlet,
    AppRoutingModule,
    HttpClientModule,
    MatSelectModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatMenuModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
