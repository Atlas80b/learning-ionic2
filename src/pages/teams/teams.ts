import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams } from 'ionic-angular';

import { TeamHomePage } from '../team-home/team-home';
import { EliteApi } from '../../shared/shared';

import _ from 'lodash';

@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html'
})
export class TeamsPage {

  constructor(private navCtrl: NavController, 
              private navParams: NavParams, 
              private loadingCtrl: LoadingController,
              private eliteApi: EliteApi) {}
  private allTeams: any;
  private allTeamDivisions: any;
  teams :any = [];

  ionViewDidLoad() {
    let selectedTournament = this.navParams.data;
    //console.log('ionViewDidLoad TeamsPage');
    let loader = this.loadingCtrl.create({
      spinner: 'dots'
    });
    loader.present().then(() =>{
      this.eliteApi.getTournamentData(selectedTournament.id).subscribe( data => {
        this.allTeams = data.items;
        this.allTeamDivisions = 
            _.chain(data.teams).groupBy('division').toPairs()
           .map(item => _.zipObject(['divisionName','divisionTeams'], item)).value();
        this.teams = this.allTeamDivisions;
        loader.dismiss();
      }); 
    });  
  }

  itemTapped($event, team){
    this.navCtrl.push(TeamHomePage, team);
  }



}
