import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CalendarService {

  getDates() {
    return ['date1', 'date2', 'date3']
  }
}
