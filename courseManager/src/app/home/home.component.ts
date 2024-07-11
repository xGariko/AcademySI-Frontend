import {Component, OnInit} from '@angular/core';
import {AboutusComponent} from "../aboutus/aboutus.component";
import {CarouselComponent} from "../carousel/carousel.component";
import {CategoryListComponent} from "../category-list/category-list.component";
import {ConctactFormComponent} from "../conctact-form/conctact-form.component";
import {CourseListComponent} from "../course-list/course-list.component";
import {FooterComponent} from "../footer/footer.component";
import {NavbarComponent} from "../navbar/navbar.component";
import {RouterOutlet} from "@angular/router";
import {Subscription} from "rxjs";
import {CourseModel} from "../../model/courseModel";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AboutusComponent,
    CarouselComponent,
    CategoryListComponent,
    ConctactFormComponent,
    CourseListComponent,
    FooterComponent,
    NavbarComponent,
    RouterOutlet
  ],

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  isAuthenticated: boolean = false;
  private userService: UserService;


  constructor(userService: UserService) {
    this.userService = userService;
  }


  ngOnInit() {
    this.isAuthenticated = this.userService.isAuthenticated();
    console.log(this.userService.getToken());
  }

}
