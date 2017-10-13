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

  ageSeconds() {
    let age = moment(`${this.year}${this.month}${this.day}`, "YYYYMMDD").fromNow();
    age = age.replace(/\D+/g, '');
    // Convert years to seconds.
    return age * 3.154e+7;
  }


}
