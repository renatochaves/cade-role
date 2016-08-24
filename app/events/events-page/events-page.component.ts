import {EventService} from "../../services/event.service";
import {Component} from '@angular/core';
import {EventItem} from "../event-item/event-item.component";
import {MapPage} from "../../map/map-page/map-page.component";
import {NavController, PopoverController} from "ionic-angular";
import {EventsSettings} from "../events-settings/events-settings";

@Component({
  templateUrl: 'build/events/events-page/events-page.component.html',
  directives: [EventItem]
})

export class EventsPage {

  events;

  constructor(private navCtrl: NavController,
              private eventService: EventService,
              private popoverCtrl: PopoverController) {
    eventService.events$.subscribe(events => this.events = events)
  }

  goToMap() {
    this.navCtrl.setRoot(MapPage);
  }

  showEventsSettings(clickEvent) {
    let popover = this.popoverCtrl.create(EventsSettings);
    popover.present({
      ev: clickEvent
    });
  }

  doRefresh(refresher) {
    this.eventService.getEvents().then(events => {
      this.events = events;
      refresher.complete();
    });
  }

}
