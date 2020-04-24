import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-rate',
  templateUrl: './rate.page.html',
  styleUrls: ['./rate.page.scss'],
})
export class RatePage {
  rate: string;
  //local variable for local access
  constructor(private storage: Storage) { }

  //stores data which was clicked
  onSave() {
    console.log(this.rate);
    this.storage.set("rating", this.rate);
  }
}


