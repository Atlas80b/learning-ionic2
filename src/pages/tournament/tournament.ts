import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams } from 'ionic-angular';

//import { MyTeamsPage } from '../my-teams/my-teams';
import { TeamsPage } from '../teams/teams';
import { EliteApi } from '../../shared/shared';
 
@Component({
  selector: 'page-tournament',
  templateUrl: 'tournament.html'
})
export class TournamentPage {

  tournaments;
  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private eliteApi: EliteApi,
              private loadingCtrl: LoadingController) {}

  ionViewDidLoad() {
    //console.log('ionViewDidLoad TournamentPage');
    let loader = this.loadingCtrl.create({
      spinner: 'dots',
      //showBackdrop: true
    });
    loader.present().then(() =>{
       this.eliteApi.getTournaments().subscribe( data => {
         this.tournaments = data;
         loader.dismiss();
        });
    });
    //this.eliteApi.getTournaments().then(data => this.tournaments = data);
  }
  
  itemTapped($event, tourney){
    this.navCtrl.push(TeamsPage, tourney);
  }

}
