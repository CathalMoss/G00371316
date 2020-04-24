import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  //data from signUp page is delivered here
  firstname: string;
  surname: string;
  email: string;
  constructor(private storage: Storage) { }

  //first namen surname and email is all received and then displayed if no error occurs
  ngOnInit() {
    this.storage.get("name").then(
      (data) => {
        this.firstname = data;
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    );

    this.storage.get("surname").then(
      (data) => {
        this.surname = data;
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    );

    this.storage.get("email").then(
      (data) => {
        this.email = data;
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    );
  }
}
