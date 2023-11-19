import {Component} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "./auth.service";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  viewType = "login";
  email = new FormControl('', [Validators.required, Validators.email]);
  userName = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  retypePassword = new FormControl('', [Validators.required]);

  constructor(private router: Router, private authService: AuthService, private userService: UserService) {
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

  onSwitchViewType(viewType: string) {
    console.log(viewType);
    this.viewType = viewType;
  }

  onLogIn(): void {
    this.authService.logIn(this.email.getRawValue()!, this.password.getRawValue()!).subscribe((response: any) => {
      console.log(response);
      this.userService.setUser(response.data);
      alert(response.message);
      this.router.navigate(["/", "home"]);
    })


  }

  onRegister(): void {
    this.authService.register(this.email.getRawValue()!, this.password.getRawValue()!, this.userName.getRawValue()!, this.retypePassword.getRawValue()!).subscribe((response: any) => {
      console.log(response);
      alert(response.message);
      this.viewType = "login";
    })
  }
}
