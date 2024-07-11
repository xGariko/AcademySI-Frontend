import {Component, EventEmitter, Output} from '@angular/core';
import { LoginRequest } from "../../model/loginRequest";
import {FormsModule, NgForm} from "@angular/forms";
import {Router, RouterLink} from '@angular/router';
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService,
              private router: Router) { }

  onSubmit(loginForm: NgForm) {
    this.userService.login(this.email, this.password).subscribe(success => {
      if (success) {
        this.router.navigate(['/home']);
      } else {
        this.errorMessage = 'Login failed. Please check your email and password.';
      }
    });
  }

  goToRegister(){
    this.router.navigate(['/register']);
  }
}
