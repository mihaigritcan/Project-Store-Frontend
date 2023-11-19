import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {

  }

  public logIn(email: string, password: string) {
    let body = {
      "email": email,
      "password": password
    }

    return this.httpClient.post(`${environment.apiUrl}/users/login`, body);
  }

  public register(email: string, password: string, userName: string, reTypePassword: string) {
    let body = {
      "email": email,
      "password": password,
      "username": userName,
      "reTypePassword": reTypePassword
    }
    return this.httpClient.post(`${environment.apiUrl}/users/register`, body);
  }


}
