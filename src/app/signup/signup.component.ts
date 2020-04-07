import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
  name: any;
  topic: any;
  desc: any;

  onKeyUp() {
    console.log(`Name: ${this.name}, Topic: ${this.topic}, Description: ${this.desc}`)
  }

}
