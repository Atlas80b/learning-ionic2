import { Component } from '@angular/core';
import { LoadingController,NavController, NavParams } from 'ionic-angular';
import { TournamentPage } from '../tournament/tournament';
import { TeamHomePage } from '../team-home/team-home';

import { EliteApi } from '../../shared/shared'; 

@Component({
    selector: 'page-my-teams',
    templateUrl: 'my-teams.html'
})
export class MyTeamsPage{

    favorites: any = [{
        team:{ id: 805, name: 'HC Elite', coach: 'Michelotti'},
        tournamentId:'98c6857e-b0d1-4295-b89e-2d95a45437f2',
        tournamentName:'Holiday Hoops Challenge'
        }
    ];
    constructor(private navCtrl: NavController,
                private navParams: NavParams,
                private eliteApi : EliteApi,
                private loadingCtrl: LoadingController) {}

    ionViewDidLoad() {
        console.log('ionViewDidLoad MyTeamsPage');
    }

    goToTournaments(){
        //console.log(this.navCtrl);
        this.navCtrl.push(TournamentPage);
    }

    favoriteTapped($event, item){
        let loader = this.loadingCtrl.create({
            spinner: 'dots',
            dismissOnPageChange: true
        });
        loader.present().then(() =>{
        this.eliteApi.getTournamentData(item.tournamentId).subscribe( t => this.navCtrl.push(TeamHomePage, item.team));
        });
    }

}