import { Galactic } from './../js/galactic.js';

describe('galactic', function() {
  let testGalactic;

  beforeEach(function() {
  testGalactic = new Galactic('1987', '09', '12');
  });

  it('will return age on earth given birthdate', function() {
    expect(testGalactic.ageYears()).toEqual("30 years ago");
  });

  it('will return age on earth given birthdate in seconds', function() {
    expect(testGalactic.ageSeconds()).toEqual(946200000);
  });

  it('will return age on mercury in years', function() {
    expect(testGalactic.mercuryAgeYears()).toEqual(125);
  });

  it('will return age on venus in years', function() {
    expect(testGalactic.venusAgeYears()).toEqual(48.38709677419355);
  });

  it('will return age on mars in years', function() {
    expect(testGalactic.marsAgeYears()).toEqual(15.957446808510639);
  });

  it('will return age on jupiter in years', function() {
    expect(testGalactic.jupiterAgeYears()).toEqual(2.5295109612141653);
  });
});
