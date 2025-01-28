import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isDarkMode: boolean = false;
  isLogin: boolean = false;
  username: string = "";
  password: string = "";
  error: string = "";
  login() {
    if (this.username.length >= 2 && this.password.length >= 8) {
      if (this.username == "admin" && this.password == "12345678") {
        this.isLogin = true;
        this.error = "شما با موفقیت وارد شدید";
      }
      else {
        this.error = "رمز عبور یا نام کاربری اشتباه است";
      }
    }
    else {
      this.error = "لطفا مقادیر خواسته شده را به درستی وارد کنید";
    }
  }
}
