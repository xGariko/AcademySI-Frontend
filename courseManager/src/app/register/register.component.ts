import { Component } from '@angular/core';
import { RegisterRequest} from "../../model/registerRequest";
import {FormsModule, NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../services/user/user.service";
import {NgIf} from "@angular/common";
import {catchError} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerRequest: RegisterRequest = new RegisterRequest();

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private userService: UserService, private router: Router) { }

  submit(form:NgForm) {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    this.userService.register(this.email, this.password, this.confirmPassword, this.firstName, this.lastName).subscribe(success => {
      if (success) {
        this.successMessage = 'Registration successful! You can now log in.';
        this.router.navigate(['/login']);
      } else {
        this.errorMessage = 'Registration failed. Please try again.';
      }
    });
  }



  goToLogin(){
    this.router.navigate(['/login']);
  }
}

