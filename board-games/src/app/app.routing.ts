import {Routes} from '@angular/router';

import { LoginComponent } from './components/login/login.component';

import { GamesListComponent } from './components/games-list/games-list.component';

import { AuthGuardService } from './services/auth-guard.service';



const routing:Routes = [

    { path: 'login', component:LoginComponent},

    { path: 'games-list', component:GamesListComponent, canActivate: [AuthGuardService]},

    { path: '**', redirectTo:'games-list'},

];



export default routing;