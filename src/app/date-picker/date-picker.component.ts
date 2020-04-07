import { Component, OnInit } from '@angular/core';
import { SignupComponent } from '../signup/signup.component';
import { CalendarService } from '../calendar.service';
import { SheetService } from '../sheet.service';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  private openSpots: number;
  signUpForm = new SignupComponent;

  constructor(dates: CalendarService, slots: SheetService) {
    if(!dates || !slots) {
      throw new Error("Sorry, there are no slots available in the given time period.")
    }
    this.openSpots = dates.len;
  }

  ngOnInit(): void {
  }

}
