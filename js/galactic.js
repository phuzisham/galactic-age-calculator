var moment = require('moment');

export class Galactic {
  constructor(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  ageInt(str){
    return str.replace(/\D+/g, '');
  }

  ageYears() {
    return moment(`${this.year}${this.month}${this.day}`, "YYYYMMDD").fromNow();
  }

  ageSeconds() {
    let age = moment(`${this.year}${this.month}${this.day}`, "YYYYMMDD").fromNow();
    age = age.replace(/\D+/g, '');
    // Convert years to seconds.
    return age * 3.154e+7;
  }

  // A Mercury year is .24 Earth years.
  mercuryAgeYears() {
    let age = moment(`${this.year}${this.month}${this.day}`, "YYYYMMDD").fromNow();
    age = age.replace(/\D+/g, '');
    return age / .24;
  }

}
