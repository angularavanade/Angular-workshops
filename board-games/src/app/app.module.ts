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
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import routing from './app.routing';
import { LoginService } from './services/login.service';
@NgModule({
  declarations: [
    AppComponent,
    GamesListComponent,
    GameComponent,
    FilterBoxComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      routing
    )
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
