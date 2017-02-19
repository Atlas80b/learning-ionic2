import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { StandingsPage } from '../standings/standings';
import { TeamDetailPage } from '../team-detail/team-detail';
//import { MyTeamsPage } from '../my-teams/my-teams';

@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.html'
})
export class TeamHomePage {

  teamDetailTab = TeamDetailPage;
  standingsTab = StandingsPage;
  
  team: any;
  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.team = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamHomePage');
  }

  goHome(){
    this.navCtrl.popToRoot();
  }

}
