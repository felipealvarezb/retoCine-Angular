import { Component } from '@angular/core';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = {
    email: '',
    password: '',
    phone: '',
    birthday: ''
  };

  constructor(private authService:AuthService){}

  loginUser(){
    this.authService.loginUser(this.user).subscribe(
      (res) => {
        console.log('Login success', res);
      },
      (error) => {
        console.error('Error login', error);
      }
    )
  }
}
