import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
  @Input() name: any;
  @Input() topic: any;
  @Input() desc: any;

  onKeyUp() {
    console.log(`Name: ${this.name}, Topic: ${this.topic}, Description: ${this.desc}`)
  }

}
