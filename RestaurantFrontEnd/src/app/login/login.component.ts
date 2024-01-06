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

  ngOnInit(): void {
    this.router.navigate(['/Home']);
  }

  loginUser(form: NgForm) {
    
    if (form.invalid) {
      this.infoMessage = "Please fill in all fields";
      return;
    }

    this.userService.loginUser(this.credentials).subscribe(r => {
      if (r.token) {
        localStorage.setItem("token", r.token);
        this.credentials.email = "";
        this.credentials.password = "";
        this.router.navigate(["/Home"]);
      } else {
        this.infoMessage = "Accout not found"
      }
    }
    );
  }
}
