import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/User";

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit{
  @Output() changeData: EventEmitter<any> = new EventEmitter<any>();

  usersList: Array<User> = [];

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.userService.getUserList().subscribe((usersList: Array<User>) => {
      this.usersList = usersList;
    });
  }


  onDelete(user: any): void {
    console.log(user);
    // user.id! => ! ii spune compilatorului ca proprietatea "id" este diferita de null.
    this.userService.deleteUser(user.id!);
  }

  onEdit(user: any): void {
    console.log("user list on edit")
    console.log(user);
    this.changeData.emit(user);
  }

}
