import { Component } from '@angular/core';
import { RegisterForm } from '../interfaces/register-form';
import { UserInfo } from '../interfaces/user-info';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {

  userInfo : UserInfo = {
    email: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    adress: '',
    dateOfBirth: new Date()
  };
  
}
