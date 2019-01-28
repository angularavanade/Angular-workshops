import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';
import { Game } from '../../models/game';
import { BehaviorSubject } from 'rxjs';
import { filter, debounceTime } from 'rxjs/operators'; 
import { FilterService } from 'src/app/services/filter.service';
import {trigger, state, style, animate, transition} from '@angular/animations';
import { visitSiblingRenderNodes } from '@angular/core/src/view/util';

@Component({
  selector: 'app-games-list',
  animations: [
    trigger('openClose',[
      state('open', style({
        width: '200px',
      })),
      state('closed', style({
        width: '0px',
      })),
      state('show', style({
        display: 'block',
      })),
      state('hide', style({
        display: 'none',
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ])
    ])  
  ],
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {
  games: Game[];
  gamesResults: Game[];
  searchTextChange = new BehaviorSubject<string>('');
  isOpen = false;

  constructor(private gamesService: GamesService, private filterService: FilterService) { }

  
  ngOnInit() {
    this.gamesService.getGames().subscribe(data => { 
      this.gamesResults = this.games = data;
    });

    this.searchTextChange.pipe(
      debounceTime(500)
    ).subscribe(x => this.gamesResults = this.filterService.search(x, this.games));

    this.filterService.onFilterChange.subscribe(
      () => this.gamesResults = this.filterService.filterGames(this.games)
      );
  }

  openClose() {
    this.isOpen = !this.isOpen;
  }

}
