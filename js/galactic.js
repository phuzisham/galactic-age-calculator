var moment = require('moment');

export class Galactic {
  constructor(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
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

  // A Venus year is .62 Earth years.
  venusAgeYears() {
    let age = moment(`${this.year}${this.month}${this.day}`, "YYYYMMDD").fromNow();
    age = age.replace(/\D+/g, '');
    return age / .62;
  }

  // A Mars year is 1.88 Earth years.
  marsAgeYears() {
    let age = moment(`${this.year}${this.month}${this.day}`, "YYYYMMDD").fromNow();
    age = age.replace(/\D+/g, '');
    return age / 1.88;
  }

  // A Jupiter year is 11.86 Earth years.
  jupiterAgeYears() {
    let age = moment(`${this.year}${this.month}${this.day}`, "YYYYMMDD").fromNow();
    age = age.replace(/\D+/g, '');
    return age / 11.86;
  }
}
