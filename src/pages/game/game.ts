import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeamHomePage } from '../team-home/team-home';
import { EliteApi } from '../../shared/shared';

@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {
  game : any;
  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private eliteApi: EliteApi) {this.game = this.navParams.data;}

  ionViewDidLoad() {
    //console.log('ionViewDidLoad GamePage');
    //this.game = this.navParams.data;
  }

  teamTapped(teamId){
    let tourneyData = this.eliteApi.getCurrentTourney();
    let team = tourneyData.teams.find(t => t.id === teamId);
    this.navCtrl.push(TeamHomePage, team);
  }

}
