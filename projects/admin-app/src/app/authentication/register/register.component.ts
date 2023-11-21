import { Component } from '@angular/core';
import { AuthService } from '../../services/authentication.service';
import { User } from '../../models/user.model';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  userForm = new FormGroup({
    email: new FormControl(""),
    password: new FormControl(""),
    phone: new FormControl(""),
    birthday: new FormControl("")
  });

  constructor(private authService: AuthService) {}

  registerUser(){
    const newUser: User = {
      email: this.userForm.value.email ?? '', 
      password: this.userForm.value.password ?? '',
      phone: this.userForm.value.phone ?? '',      
      birthday: this.userForm.value.birthday ?? '' 
    };

    this.authService.registerUser(newUser).subscribe(
      (res) => {
        console.log('User register success', res);
      },
      (error) => {
        console.error('Error registering user', error);
      }
    )
  }
}
