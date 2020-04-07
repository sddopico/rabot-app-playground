import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  datesArray = ['date1', 'date2', 'date3'];
  len = this.datesArray.length;

  getDates() {
    return this.datesArray
  }
}
