import {Component, ViewChild} from '@angular/core';
import {Platform, ionicBootstrap, NavController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import {EventService} from "./services/event.service";
import {LocationService} from "./services/location.service";
import {TabsPage} from "./tabs/tabs";

@Component({
  templateUrl: "build/app.html",
  providers: [LocationService, EventService],
})
export class CadeRoleApp {

  @ViewChild('nav') nav: NavController;

  private rootPage;

  constructor(private platform: Platform) {
    this.rootPage = TabsPage;
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

}

ionicBootstrap(CadeRoleApp);
moment.locale('pt-br');
