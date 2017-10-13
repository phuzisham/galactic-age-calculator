var moment = require('moment');

export class Galactic {
  constructor(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  earthAge() {
    return moment(`${this.year}${this.month}${this.day}`, "YYYYMMDD").fromNow();
  }
}
