import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserCredentials } from '../interfaces/user-credentials';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  credentials: UserCredentials = {
    email : "",
    password : ""
  };

  infoMessage: string = "";

  constructor( private cookie: CookieService, private userService: UserService, private router: Router ){}

  loginUser(form: NgForm) {
    if (form.invalid) {
      this.infoMessage = "Please fill in all fields";
      return;
    }

    this.userService.loginUser(this.credentials).subscribe(r => {
      if (r.token) {
        this.cookie.set("token", r.token);
        this.router.navigate(["/home"]);
      } else {
        this.infoMessage = "Accout not found"
      }
    }
    );
  }
}
