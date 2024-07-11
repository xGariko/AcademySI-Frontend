import { Component } from '@angular/core';
import {CategoryCardComponent} from "../category-card/category-card.component";
import {CategoryModel} from "../../model/categoryModel";
import {NgForOf} from "@angular/common";
import {CourseModel} from "../../model/courseModel";
import {CourseService} from "../../services/course/course.service";
import {CategoryService} from "../../services/category/category.service";

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CategoryCardComponent, NgForOf],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {

  categories: CategoryModel[][] = [];
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe((result)=>{
      this.categories = this.chunkArray(result);
      console.log(result);
    });


  }

  chunkArray<T>(inputArray: T[]): T[][] {
    const result: T[][] = [];
    for (let i = 0; i < inputArray.length; i += 4) {
      const chunk = inputArray.slice(i, i + 4);
      result.push(chunk);
    }
    return result;
  }
}
