import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MyTeamsPage } from '../pages/my-teams/my-teams';
import { TeamsPage } from '../pages/teams/teams';
import { TournamentPage } from '../pages/tournament/tournament';
import { TeamDetailPage } from '../pages/team-detail/team-detail';
import { GamePage } from '../pages/game/game';
import { StandingsPage } from '../pages/standings/standings';
import { TeamHomePage } from '../pages/team-home/team-home';
import { EliteApi } from '../shared/shared';


@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    TeamsPage,
    TournamentPage,
    TeamDetailPage,
    GamePage,
    StandingsPage,
    TeamHomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage,
    TeamsPage,
    TournamentPage,
    TeamDetailPage,
    GamePage,
    StandingsPage,
    TeamHomePage,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, EliteApi]
})
export class AppModule {}
