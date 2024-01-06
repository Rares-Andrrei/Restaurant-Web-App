import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LoggedInHomePageComponent } from './logged-in-home-page/logged-in-home-page.component';
import { AuthGuardService } from './services/auth-guard-service';

const routes: Routes = [
  {path : "Login", component: LoginComponent, pathMatch: 'full'},
  {path : "Register", component: RegisterComponent, pathMatch: 'full'},
  {path : "Contact", component: ContactComponent, pathMatch: 'full', canActivate: [AuthGuardService]},
  {path : "YourAccount", component: UserInfoComponent, pathMatch: 'full', canActivate: [AuthGuardService]},
  {path : "Home", component: LoggedInHomePageComponent, pathMatch:'full', canActivate: [AuthGuardService]},
  {path : "WelcomePage", component:WelcomePageComponent, pathMatch: 'full'},
  {path : "**", redirectTo: '/WelcomePage'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
