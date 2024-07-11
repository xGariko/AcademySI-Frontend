import { Injectable } from '@angular/core';
import {API_URL, RETRY_VALUE} from "../../main";
import {catchError, map, Observable, of, retry} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CourseModel} from "../../model/courseModel";

@Injectable({
  providedIn: 'root'
})
export class CourseService {


  constructor(private http: HttpClient) {
    http.head("Access-Control-Allow-Origin: *");
  }

  public getAllCourses() : Observable<CourseModel[]>{
    return this.http.get<CourseModel[]>(API_URL + "/course")
      .pipe(
        map((data: any[]) => data.map(item => new CourseModel(item))),
        retry(RETRY_VALUE)
    );
  }

}
