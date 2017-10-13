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
});
