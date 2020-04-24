import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage {

  //name, surname and email all used and data is stored from whatever the user enters
  name: string;
  surname: string;
  email: string;

  constructor(private storage: Storage) { }

  //saves the data entered by user
  onSave() {
    console.log(this.name);
    this.storage.set("name", this.name);

    console.log(this.surname);
    this.storage.set("surname", this.surname);

    console.log(this.email);
    this.storage.set("email", this.email);
  }

}








