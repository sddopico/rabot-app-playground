import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
  name: string;
  topic: string;
  desc: string;

  addName(newName: string) {
    this.name = newName;
    console.log(this.name);
  }

  addTopic(newTopic: string) {
    this.topic = newTopic;
    console.log(this.topic);
  }

  addDesc(newDesc: string) {
    this.desc = newDesc;
    console.log(this.desc)
  }

}
