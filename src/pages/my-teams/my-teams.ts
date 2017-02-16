import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TournamentPage } from '../tournament/tournament';

@Component({
    templateUrl: 'my-teams.html'
})
export class MyTeamsPage{
    constructor(private navCtrl: NavController, public navParams: NavParams) {}

    ionViewDidLoad() {
        console.log('ionViewDidLoad MyTeamsPage');
    }

    goToTournaments(){
        this.navCtrl.push(TournamentPage);
    }

}