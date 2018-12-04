import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';
import { Game } from '../../models/game';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {
  games: Game[];
  gamesResults: Game[];

  constructor(private gamesService: GamesService) { }

  
  ngOnInit() {
    this.gamesService.getGames().subscribe(data => { 
      this.gamesResults = this.games = data;
    })
  }

  search(value) {
    this.gamesResults = this.games.filter(x => {
      return x.name.toLowerCase().includes(value.toLowerCase()) || x.artist.toLowerCase().includes(value.toLowerCase())
    });
    
    

  }

}
