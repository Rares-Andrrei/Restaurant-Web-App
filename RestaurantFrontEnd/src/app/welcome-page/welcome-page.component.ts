import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AuthGuardService } from '../services/auth-guard-service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent {

  constructor(private router: Router, private authGuard: AuthGuardService) { }

   ngOnInit(): void {
    this.router.navigate(["/Home"]);
  }

}
