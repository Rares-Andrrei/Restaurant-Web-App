import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserCredentials } from '../interfaces/user-credentials';
import { RegisterForm } from '../interfaces/register-form';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = "https://localhost:7080/api/users";

  constructor(private http: HttpClient) { }

  loginUser(credentials : UserCredentials) {
    return this.http.post<any>(this.baseUrl + "/login", credentials);
  }

  registerUser(registerData: RegisterForm) {
    return this.http.post<any>(this.baseUrl + "/register", registerData);
  }
}
