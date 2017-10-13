var moment = require('moment');

export class Galactic {
  constructor(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  earthAge() {
    let age = moment(`${this.year}${this.month}${this.day}`, "YYYYMMDD").fromNow();
    let ageSeconds;

    age = age.replace(/\D+/g, '');
    // Convert years to seconds.
    debugger;
    return age * 3.154e+7;
  }


}
