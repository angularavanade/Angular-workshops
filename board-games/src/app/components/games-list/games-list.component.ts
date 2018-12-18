import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';
import { Game } from '../../models/game';
import { BehaviorSubject } from 'rxjs';
import { filter, debounceTime } from 'rxjs/operators'; 
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {
  games: Game[];
  gamesResults: Game[];
  searchTextChange = new BehaviorSubject<string>('');

  constructor(private gamesService: GamesService, private filterService: FilterService) { }

  
  ngOnInit() {
    this.gamesService.getGames().subscribe(data => { 
      this.gamesResults = this.games = data;
    });
    this.searchTextChange.pipe(
      debounceTime(500)
    ).subscribe(x => this.gamesResults = this.filterService.search(x, this.games));
  }

}
