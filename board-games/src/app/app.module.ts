import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { HttpClientModule } from '@angular/common/http';
import { GameComponent } from './components/game/game.component';


import { MatCardModule } from '@angular/material';
import { FilterBoxComponent } from './components/filter-box/filter-box.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    GamesListComponent,
    GameComponent,
    FilterBoxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
