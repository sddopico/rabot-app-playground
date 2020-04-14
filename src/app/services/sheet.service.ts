import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SheetService {

  openRows: number = 3;

  getRows() {
    return this.openRows
  }

  constructor() { }
}
