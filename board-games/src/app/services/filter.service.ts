import { Injectable } from '@angular/core';
import { Game } from '../models/game';
import { Subject } from 'rxjs';
import { GameFilter } from '../models/game-filter';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private filterChange = new Subject();
  gameFilter: GameFilter;
  onFilterChange = this.filterChange.asObservable();

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

  filterGames(games: Game[]): Game[] {
    return games.filter(game => {

      if (this.gameFilter.name) {
        if (! game.name.toLowerCase().includes(this.gameFilter.name.toLowerCase())) {
          return false;
        }
      }

      if (this.gameFilter.publisher) {
        if (! game.publisher.toLowerCase().includes(this.gameFilter.publisher.toLowerCase())) {
          return false;
        }
      }

      if (this.gameFilter.minNumberOfPlayers && this.gameFilter.maxNumberOfPlayers) {
        if (game.minNumberOfPlayers < this.gameFilter.minNumberOfPlayers && game.maxNumberOfPlayers > this.gameFilter.maxNumberOfPlayers) {
          return false;
        }
      }

      if (this.gameFilter.minNumberOfPlayers) {
        if (game.minNumberOfPlayers < this.gameFilter.minNumberOfPlayers) {
          return false;
        }
      }
      
      if (this.gameFilter.maxNumberOfPlayers) {
        if (game.maxNumberOfPlayers > this.gameFilter.maxNumberOfPlayers) {
          return false;
        }
      }
      return true;
    });
  }

  setFilter(gameFilter: GameFilter) {
    this.gameFilter = gameFilter;
    this.filterChange.next();
  }
}
