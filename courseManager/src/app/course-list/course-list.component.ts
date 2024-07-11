import { Component } from '@angular/core';
import {CourseCardComponent} from "../course-card/course-card.component";
import {SearchbarComponent} from "../searchbar/searchbar.component";
import {CourseModel} from "../../model/courseModel";
import {NgForOf} from "@angular/common";
import { CourseService } from "../../services/course/course.service";


@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CourseCardComponent,
    SearchbarComponent,
    NgForOf
  ],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})



export class CourseListComponent {
  courses: CourseModel[] = [];
  filteredCourses: CourseModel[] = [];

  constructor(private courseService: CourseService) { }

  protected readonly String = String;

  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe((result)=>{
      this.courses = result;
      this.filteredCourses = result;
      console.log(this.courses);
    });
  }

  search(toSearch: string): void {
    console.log(toSearch);
    if (toSearch == "") {
      this.filteredCourses = [...this.courses];
    } else {
      this.filteredCourses = this.courses.filter(course =>
        course.title.toLowerCase().includes(toSearch.toLowerCase())
      );
    }
  }




}
