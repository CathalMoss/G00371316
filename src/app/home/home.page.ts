import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //geolocation longtitute and latitute
  long: number;
  lat: number;

  //rating option
  rate: string;

  //local variable for local access
  //flashlight and geolocation access
  constructor(private storage: Storage, private flashlight: Flashlight,
    private geolocation: Geolocation) { }

    //flashlight on/off option
  lightMethod() {
    this.flashlight.toggle();
  }

  //location display 
  locationMethod() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.long = resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  //ionViewWillEnter updates anytime the user rates the app
  ionViewWillEnter() {
    this.storage.get("rating").then(
      (data) => {
        this.rate = data;
      }
    ).catch(
      () => {
        (error) => {
          console.log(error);
        }
      }
    );
  }
}
