import { Component } from '@angular/core';
import { RegisterForm } from '../interfaces/register-form';
import { UserInfo } from '../interfaces/user-info';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {

  userInfo : UserInfo = {
    firstName: '',
    lastName: '',
    birthDay: new Date(),
    email: '',
    phoneNumber: '',
    adress: '',
  };

  constructor(private usersServcie: UserService) { }

  ngOnInit(): void {
    this.usersServcie.getUserInfo(localStorage.getItem('token') ?? '' ).subscribe(r => {
      this.userInfo.adress = r.adress;
      this.userInfo.birthDay = r.birthDay;
      this.userInfo.email = r.email;
      this.userInfo.firstName = r.firstName;
      this.userInfo.lastName = r.lastName;
      this.userInfo.phoneNumber = r.phoneNumber;
    });
  }
  
}
