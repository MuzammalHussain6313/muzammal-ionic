import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  User = { name : 'Muzammal Hussain',
           city : 'basirpur-Okara',
           interests: ['Microservices', 'movies' , 'teaching'] };
  constructor() {}

}
