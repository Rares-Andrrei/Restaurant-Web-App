import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { UserService } from "./user.service";

@Injectable()
export class AuthGuardService implements CanActivate{

    constructor(private router: Router, private usersService: UserService ) { }

    canActivate(): Promise<boolean> {
      return new Promise<boolean>((resolve) => {
        this.usersService.validateUser(localStorage.getItem('token') ?? '').subscribe(
          (response) => {
            if (response.status === 'success') {
              resolve(true); // Allow navigation
            } else {
              resolve(false); // Prevent navigation
            }
          },
          (error) => {
            resolve(false); // Prevent navigation
          }
        );
      });
    }
}
