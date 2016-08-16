import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { EVENTS } from './events.mock';

@Injectable()
export class EventService {

  constructor(private http: Http) {
  }

  getEvents() {
    // // don't have the data yet
    return new Promise(resolve => {

      // resolve(EVENTS);
      this.http.get('http://localhost:3000/events?lat=-23.5502055&lng=-46.6537139&distance=500&access_token=861161564018485|37gRLbgrtmX_SFIbaqUzDzmbJd4&sort=popularity')
        .map(res => res.json())
        .subscribe(data => {
          resolve(data.events);
        });
    });
  }
}