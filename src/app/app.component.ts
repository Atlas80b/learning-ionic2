import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { MyTeamsPage } from '../pages/my-teams/my-teams';
//import { TeamsPage } from '../pages/teams/teams';
import { TournamentPage } from '../pages/tournament/tournament';
//import { TeamDetailPage } from '../pages/team-detail/team-detail';
//import { GamePage } from '../pages/game/game';
//import { StandingsPage } from '../pages/standings/standings';
//import { TeamHomePage } from '../pages/team-home/team-home';


@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = MyTeamsPage;

  //pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    // this.pages = [
    //   { title: 'My Teams', component: MyTeamsPage },
    //   { title: 'Tournament', component: TournamentPage },
    //   { title: 'Team Detail', component: TeamDetailPage},
    //   { title: 'Game', component: GamePage}
    // ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page);
  }

  goToHome(){
    this.nav.popToRoot();
  }

  goToTournaments(){
    this.nav.push(TournamentPage);
  }
}
