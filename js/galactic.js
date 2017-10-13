var moment = require('moment');

export class Galactic {
  constructor(birthdate, continent) {
    this.birthdate = birthdate;
    this.continent = continent;
    this.expectancy = 0;
  }

  ageYears() {
    return moment(`${this.birthdate}`, "YYYY-MM-DD").fromNow().replace(/\D+/g, '');
  }

  ageSeconds() {
    let age = moment(`${this.birthdate}`, "YYYY-MM-DD").fromNow();
    age = age.replace(/\D+/g, '');
    // Convert years to seconds.
    return age * 3.154e+7;
  }

  // A Mercury year is .24 Earth years.
  mercuryAgeYears() {
    let age = moment(`${this.birthdate}`, "YYYY-MM-DD").fromNow();
    age = age.replace(/\D+/g, '');
    return age / 0.24;
  }

  // A Venus year is .62 Earth years.
  venusAgeYears() {
    let age = moment(`${this.birthdate}`, "YYYY-MM-DD").fromNow();
    age = age.replace(/\D+/g, '');
    return age / 0.62;
  }

  // A Mars year is 1.88 Earth years.
  marsAgeYears() {
    let age = moment(`${this.birthdate}`, "YYYY-MM-DD").fromNow();
    age = age.replace(/\D+/g, '');
    return age / 1.88;
  }

  // A Jupiter year is 11.86 Earth years.
  jupiterAgeYears() {
    let age = moment(`${this.birthdate}`, "YYYY-MM-DD").fromNow();
    age = age.replace(/\D+/g, '');
    return age / 11.86;
  }

  // Continents: North America/81, Europe/81, Oceania/79, South America/79, Asia/74, Africa/64
  lifeExpect() {
    let age = moment(`${this.birthdate}`, "YYYY-MM-DD").fromNow();
    age = age.replace(/\D+/g, '');

    if (this.continent == 'North America' || this.continent == 'Europe') {
      this.expectancy = 81 - age;
    } else if (this.continent == 'Oceania' || 'South America') {
      this.expectancy = 79 - age;
    } else if (this.continent == 'Asia') {
      this.expectancy = 74 - age;
    } else {
      this.expectancy = 64 - age;
    }
  }
}
