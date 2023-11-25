import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Item} from "../models/Item";
import {UserService} from "./user.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {B} from "@angular/cdk/keycodes";

@Injectable({
  providedIn: 'root'
})
export class FavoriteService{
  private favoriteObservable = new BehaviorSubject<Array<Item>>([]);
  private cartObservable = new BehaviorSubject<Array<Item>>([]);
  private allFavCartsObservable = new BehaviorSubject(<Array<any>>([]));
  constructor(private userService: UserService, private httpClient: HttpClient) {
    this.readAllFavCarts();
  }


  public addToFavorite(item: Item): void {
    let items = this.favoriteObservable.getValue();
    items.push(item);
    this.favoriteObservable.next(items);
  }

  public removeFromFavorite(item: Item): void {
    let items = this.favoriteObservable.getValue();
    /*items = items.filter((it:Item)=>{
      if(it.id==item.id){
        return false;
      }else {return true};
    })*/
    items = items.filter((it: Item) => it.id != item.id);
    this.favoriteObservable.next(items);
  }

  public getFavorite() {
    return this.favoriteObservable.asObservable()
  }

  public createFavorite() {
    let body = {
      userId: this.userService.getUser().id,
      items: this.favoriteObservable.getValue()
    }

    console.log(body)

    this.httpClient.post(`${environment.apiUrl}/carts/`, body).subscribe((response: any) => {
      console.log(response)
      this.favoriteObservable.next([]);
    })
  }

  public createFavoriteWithDto() {
    let body = {
      userId: this.userService.getUser().id,
      items: this.favoriteObservable.getValue()
    }
    this.httpClient.post(`${environment.apiUrl}/carts/create-dto`, body).subscribe((response: any) => {
      console.log(response)
    })
  }

  public deleteFavorite(id: string) {
    this.httpClient.delete(`${environment.apiUrl}/carts/${id}`).subscribe((response: any) => {
      console.log(response);
      this.readAllFavCarts()
    })
  }

  public readAllFavCarts() {
    return this.httpClient.get(`${environment.apiUrl}/carts/`).subscribe((response: any) => {
      this.allFavCartsObservable.next(response.data)
    });
  }
  public addToCart(item: Item): void {
    let items = this.cartObservable.getValue();
    items.push(item);
    this.cartObservable.next(items);
  }
}
