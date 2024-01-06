import { Component } from '@angular/core';
import { RegisterForm } from '../interfaces/register-form';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

   registerData : RegisterForm = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    adress: "",
    dateOfBirth: "",
   };

   confirmPassword: string = "";
   infoMessage: string = "";

   constructor( private cookie: CookieService, private userService: UserService, private router: Router ){}

   ngOnInit(): void {
    this.router.navigate(['/Home']);
  }

    registerUser(form: NgForm) {

      if (form.invalid) {
        this.infoMessage = "Please fill in all fields";
        return;
      }

      if (this.registerData.password != this.confirmPassword) {
        this.infoMessage = "Passwords do not match";
        return;
      }

      this.userService.registerUser(this.registerData).subscribe(r => {
        if (r.message) {
          this.infoMessage = r.message;
        }
      });
    }
}
