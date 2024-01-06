import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";

@Injectable()
export class AuthGuardService implements CanActivate{

    constructor(private router: Router ) { }

    canActivate(): boolean {
        if (localStorage.getItem('token')) {
            return true;
          } else {
            this.router.navigate(['/Login']);
            return false;
          }
    }
}
