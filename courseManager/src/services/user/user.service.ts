import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, BehaviorSubject, catchError, retry} from 'rxjs';
import { map } from 'rxjs/operators';
import {API_URL, RETRY_VALUE} from "../../main";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loginUrl = API_URL + '/user/login';
  private registerUrl = API_URL + '/user/register';
  private tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<boolean> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify({ "email":email, "password":password });

    return this.http.post<any>(this.loginUrl, body, { headers })
      .pipe(
        map(response => {
          if (response.token) {
            this.tokenSubject.next(response.token);
            localStorage.setItem('authToken', response.token);
            return true;
          }
          return false;
        })
      );
  }

  register(email: string, password: string, confirmPassword:string, name: string, lastName: string): Observable<boolean> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {
      "name": name,
      "lastName": lastName,
      "email": email,
      "password": password
    };
    console.log(body);

    return this.http.post<any>(this.registerUrl, body, { headers })
      .pipe(
        map(response => {
          if (response) {
            console.log(response)
            return true;
          }
          return false;
        }),
        retry(RETRY_VALUE)
      );
  }



  logout(): void {
    localStorage.removeItem('authToken');
    this.tokenSubject.next(null);
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  isAuthenticated(): boolean {
    return this.getToken() !== null;
  }

  getTokenObservable(): Observable<string | null> {
    return this.tokenSubject.asObservable();
  }
}
