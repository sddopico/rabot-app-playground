import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
  @Input() name: string;
  @Input() topic: string;
  @Input() desc: string;

  constructor(public activeModal: NgbActiveModal) {}

}
