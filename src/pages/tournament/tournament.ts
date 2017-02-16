import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-tournament',
  templateUrl: 'tournament.html'
})
export class TournamentPage {

  constructor(private navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TournamentPage');
  }
  navigation(){
    this.navCtrl.pop();
  }

}
