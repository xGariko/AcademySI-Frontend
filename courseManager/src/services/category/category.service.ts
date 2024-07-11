import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, retry} from "rxjs";
import {API_URL, RETRY_VALUE} from "../../main";
import {CategoryModel} from "../../model/categoryModel";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
    http.head("Access-Control-Allow-Origin: *");
  }

  public getAllCategories() : Observable<CategoryModel[]>{
    return this.http.get<CategoryModel[]>(API_URL + "/category")
      .pipe(
        map((data: any[]) => data.map(item => new CategoryModel(item))),
        retry(RETRY_VALUE)
      );
  }
}
