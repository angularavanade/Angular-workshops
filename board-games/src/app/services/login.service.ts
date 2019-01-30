import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl = 'http://webrental.azurewebsites.net/api/login';
  user: User;

  constructor(private httpClient: HttpClient) { }

  logIn(username:string, password:string): Observable<User> {
    return this.httpClient.post<User>(this.apiUrl, {username, password}).pipe(
      tap(data => {
        if(data.username && data.token){
          localStorage.setItem('user', JSON.stringify(data))
        }
      })
    );    
  }

  logOut(){}
}