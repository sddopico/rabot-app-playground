import { Component, Output } from '@angular/core';
import { SignupComponent } from '../signup/signup.component';
import { CalendarService } from '../services/calendar.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})

export class DatePickerComponent {
  @Output() datesAvailable: string[];

  constructor(private modalService: NgbModal, dates: CalendarService) {
    this.datesAvailable = dates.getDates();
  }

  open() {
    this.modalService.open(SignupComponent);
  }

}
