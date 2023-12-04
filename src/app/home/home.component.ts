import {Component, EventEmitter, Output} from '@angular/core';
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";
import {ItemService} from "../services/item.service";
import {UserService} from "../services/user.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    title: string = environment.appName;
    owner: string = environment.appOwner;
    items: Array<any> = [
        {
            title: 'Home',
            route: '/home',
        },
        {
            title: 'Admin',
            route: '/dashboard',
        },
        {
            title: 'Logout',
            route: '/auth',
        },
    ];
    imageSalesLeft: string = 'assets/ban.jpg';
    imageSalesMiddle: string = 'assets/BANNER11.jpg';
    imagelogo: string = 'assets/logo111.jpg';
    imagePodium: string = 'assets/podium.jpg';
    imageSales: string = 'assets/cyber_monday.jpg';

    constructor(private router: Router, private itemService: ItemService, userService: UserService) {
        this.owner = userService.getUser().username;}

    onLogout(): void {
        this.router.navigateByUrl('/auth')}

    onHome() {
        this.router.navigateByUrl('/home')}

    onAdmin() {
        this.router.navigateByUrl('/dashboard')}


    onSearch(searchTerm: string) {
        this.itemService.readItemsBySearch(searchTerm);
    }
}
