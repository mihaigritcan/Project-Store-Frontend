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
export class CartService {
  private cartObservable = new BehaviorSubject<Array<Item>>([]);
  private allCartsObservable = new BehaviorSubject(<Array<any>>([]));

  constructor(private userService: UserService, private httpClient: HttpClient) {
    this.readAllCarts();
  }


  public addToCart(item: Item): void {
    let items = this.cartObservable.getValue();
    items.push(item);
    this.cartObservable.next(items);
  }

  public removeFromCart(item: Item): void {
    let items = this.cartObservable.getValue();
    /*items = items.filter((it:Item)=>{
      if(it.id==item.id){
        return false;
      }else {return true};
    })*/
    items = items.filter((it: Item) => it.id != item.id);
    this.cartObservable.next(items);
  }

  public getCart() {
    return this.cartObservable.asObservable()
  }

  public getAllCartsFromServer() {
    return this.allCartsObservable.asObservable();
  }

  public createCart() {
    let body = {
      userId: this.userService.getUser().id,
      items: this.cartObservable.getValue()
    }

    console.log(body)

    this.httpClient.post(`${environment.apiUrl}/carts/`, body).subscribe((response: any) => {
      console.log(response)
      this.cartObservable.next([]);
    })
  }

  public createCartWithDto() {
    let body = {
      userId: this.userService.getUser().id,
      items: this.cartObservable.getValue()
    }

    this.httpClient.post(`${environment.apiUrl}/carts/create-dto`, body).subscribe((response: any) => {
      console.log(response)
    })
  }

  public deleteCart(id: string) {
    this.httpClient.delete(`${environment.apiUrl}/carts/${id}`).subscribe((response: any) => {
      console.log(response);
      this.readAllCarts()
    })
  }

  public readAllCarts() {
    return this.httpClient.get(`${environment.apiUrl}/carts/`).subscribe((response: any) => {
      this.allCartsObservable.next(response.data)
    });
  }

}
