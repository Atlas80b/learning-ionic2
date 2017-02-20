import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { MyTeamsPage } from '../my-teams/my-teams';
import { EliteApi } from '../../shared/shared';
import _ from 'lodash';
import { GamePage } from '../game/game';

@Component({
  selector: 'page-team-detail',
  templateUrl: 'team-detail.html'
})
export class TeamDetailPage {
    games: any;
    team: any;
    private tourneyData: any;
    teamStanding: any;
  constructor(private navCtrl: NavController, 
              private navParams: NavParams,
              private eliteApi: EliteApi ) {
    this.team = this.navParams.data;
    this.tourneyData = this.eliteApi.getCurrentTourney();
    this.teamStanding = _.find(this.tourneyData.standings, {'teamId': this.team.id});
  }

  ionViewDidLoad() {
      this.games = _.chain(this.tourneyData.games)
                    .filter(g=> (g.team1Id === this.team.id || g.team1Id === this.team.id))
                    .map(g=>{
                      let isTeam1 = (this.team.id === g.team1Id);
                      let opponentName = isTeam1 ? g.team2 : g.team1;
                      let scoreDisplay = this.getScoreDisplay(isTeam1, g.team1Score, g.team2Score);
                      return{
                        gameId: g.id,
                        opponent: opponentName,
                        time: Date.parse(g.time),
                        location: g.location,
                        scoreDisplay: scoreDisplay,
                        homeAway: (isTeam1 ? 'vs' : 'at')
                      }
                    })
                    .value();
  }

  getScoreDisplay(isTeam1, team1Score,  team2Score){
    if(team1Score && team2Score){
      var teamScore = (isTeam1 ? team1Score : team2Score);
      var opponentScore = (isTeam1 ? team2Score : team1Score);
      var winIndicator = teamScore > opponentScore ? 'W: ' : 'L: ';
      return winIndicator + teamScore + "-" + opponentScore;
    }
    else return "";
  }

  gameClicked($event, game){
    let sourceGame = this.tourneyData.games.find(g => g.id === game.gameId);
    console.log(sourceGame);
    this.navCtrl.parent.parent.push(GamePage, sourceGame);
  }
  
}
