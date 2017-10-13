import { Galactic } from './../js/galactic.js';

describe('galactic', function() {
  let testGalactic;

  beforeEach(function() {
  testGalactic = new Galactic('1987', '09', '12');
  });

  it('return age on earth given birthdate', function() {
    expect(testGalactic.earthAge()).toEqual("30 years ago");
  });

  it('return age on earth given birthdate in seconds', function() {
    expect(testGalactic.ageSeconds()).toEqual(946200000);
  });
});
