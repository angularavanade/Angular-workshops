import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/game';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GamesService {
  apiUrl = 'http://webrental.azurewebsites.net/api/boardgames';
  
  constructor(private http: HttpClient) { }
  
  getGames(): Observable<Game[]>{
    return this.http.get<Game[]>(this.apiUrl);
  }
}
