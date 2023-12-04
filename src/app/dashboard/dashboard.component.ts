import {Component} from '@angular/core';
import {Item} from "../models/Item";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";
import {User} from "../models/User";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    selectedItem: Item = new Item("", "", "", "", "");
    selectedUser: User = new User("", "", "", "");

    onChangeItem(item: Item): void {
        console.log("dashboard on change data");
        console.log(item);
        this.selectedItem = item;
    }

    onChangeUser(user: any): void {
        console.log("dashboard on change data");
        console.log(user);
        this.selectedUser = user;
    }

    title: string = environment.appName;
    logo: string = environment.appLogo;
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

    constructor(private router: Router) {
    }

    onChangePage(page: any) {
        this.router.navigateByUrl(page.route);
    }

    onLogout(): void {
        this.router.navigateByUrl('/auth')
    }

    onHome() {
        this.router.navigateByUrl('/home')
    }

    onAdmin() {
        this.router.navigateByUrl('/dashboard')
    }

}
