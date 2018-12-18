import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/game';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GamesService {
  apiUrl = 'https://webrental20181129012527.azurewebsites.net/api/boardgames';
  
  constructor(private http: HttpClient) { }
  
  getGames(): Observable<Game[]>{
    return this.http.get<Game[]>(this.apiUrl);
  }
}
