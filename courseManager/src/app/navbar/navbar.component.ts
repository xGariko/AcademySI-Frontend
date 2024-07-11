import {Component, Input} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {Subscription} from "rxjs";
import {NgIf} from "@angular/common";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isAuthenticated: boolean = false;
  private authSubscription: Subscription;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.isAuthenticated = this.userService.isAuthenticated();
    this.authSubscription = this.userService.getTokenObservable().subscribe(token => {
      this.isAuthenticated = !!token;
    });
  }

  ngOnDestroy() {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/home']);
  }

  smoothScroll(elemnentId : string) {
    document.getElementById(elemnentId).scrollIntoView({
      block: "start",
      behavior: 'smooth'
    });
  }

  goToLogin(){
    this.router.navigate(['/login']);
  }
}
