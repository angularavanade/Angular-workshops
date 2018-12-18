import { Injectable } from '@angular/core';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  search(value, games: Game[]): Game[] {
    if (!games) {
      return;
    }
    if (value.length < 3) {
      return games;
    }
    return games.filter(x => {
      return x.name.toLowerCase().includes(value.toLowerCase()) || x.artist.toLowerCase().includes(value.toLowerCase())
    });
  }
}
