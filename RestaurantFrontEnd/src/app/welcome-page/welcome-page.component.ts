import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')) {
      this.router.navigate(["/Home"]);
    }
  }

}
