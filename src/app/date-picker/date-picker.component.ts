import { Component, Output } from '@angular/core';
import { SignupComponent } from '../signup/signup.component';
import { CalendarService } from '../calendar.service';
//import { SheetService } from '../sheet.service';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent {

  @Output() datesAvailable: string[];
  signUpForm = new SignupComponent;

  constructor(dates: CalendarService) {
    this.datesAvailable = dates.getDates();
  }

}
