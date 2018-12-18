import { Component, OnInit, Input } from '@angular/core';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  rate: number;
  constructor() { }

  @Input() gameData: Game;

  ngOnInit() {
    this.rate = Math.round((5*this.gameData.rate)/100);
  }

}
