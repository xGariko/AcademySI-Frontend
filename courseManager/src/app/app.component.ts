import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { CourseCardComponent } from "./course-card/course-card.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { CourseListComponent } from "./course-list/course-list.component";
import { ConctactFormComponent } from "./conctact-form/conctact-form.component";
import { FooterComponent  } from "./footer/footer.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import {HomeComponent} from "./home/home.component";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LoginComponent,
    RegisterComponent,
    CourseCardComponent,
    NavbarComponent,
    CourseListComponent,
    ConctactFormComponent,
    FooterComponent,
    CarouselComponent,
    CategoryListComponent,
    CategoryCardComponent,
    AboutusComponent,
    HomeComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'courseManager';
}
