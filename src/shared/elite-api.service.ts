import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EliteApi {
    private baseUrl = 'https://elite-schedule-app-i2-1bfd2.firebaseio.com';
    private currentTourney: any = {};
    private tournaments: any = {};
    constructor(private http: Http) {

     }

     getTournaments(): Observable<any> {
        const url = this.baseUrl +'/tournaments.json';
        return this.http.get(url).map((response: Response)=>{ 
            this.tournaments = response.json();
            return this.tournaments;
            });
     }
     getTournamentData(tourneyID): Observable<any> {
         const url = this.baseUrl +'/tournaments-data/'+ tourneyID +'.json';
         return this.http.get(url).map((response: Response)=>{
             this.currentTourney = response.json();
             return this.currentTourney;
            });
     }

     getCurrentTourney(){
         return this.currentTourney;
     }
}