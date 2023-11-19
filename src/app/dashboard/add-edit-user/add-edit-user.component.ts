import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../auth/auth.service";
import {UserService} from "../../services/user.service";
import {User} from "../../models/User";

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnChanges{
  @Input("user") user: User = new User("", "", "", "");
  id = "";
  email = new FormControl('', [Validators.required, Validators.email]);
  userName = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  retypePassword = new FormControl('', [Validators.required]);
  userRole = new FormControl('', [Validators.required]);


  constructor(private router: Router, private authService: AuthService, private userService: UserService) {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.user!= null){
      this.id = this.user.id;
      this.email = new FormControl(this.user.email, [Validators.required, Validators.email]);
      this.userName = new FormControl(this.user.username, [Validators.required]);
      this.password = new FormControl(this.user.password, [Validators.required]);
      this.retypePassword = new FormControl('', [Validators.required]);
      this.userRole = new FormControl(this.user.userRole, [Validators.required]);
    }
  }

  getErrorEmailMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorPasswordMessage() {
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }

    return this.password.hasError('password') ? 'Not a valid password' : '';
  }

  getErrorMessage(formControl: FormControl) {
    if (formControl.hasError('required')) {
      return 'You must enter a value';
    }

    return "";
  }


  onSave(): void {
    if (this.id == ""){
      this.userService.createUser(
        this.userName.getRawValue()!,
        this.email.getRawValue()!,
        this.password.getRawValue()!,
        this.retypePassword.getRawValue()!,
        this.userRole.getRawValue()!)
    } else {
      this.userService.updateUser(
        this.id,
        this.userName.getRawValue()!,
        this.email.getRawValue()!,
        this.password.getRawValue()!,
        this.retypePassword.getRawValue()!,
        this.userRole.getRawValue()!)
    }
  }
}


