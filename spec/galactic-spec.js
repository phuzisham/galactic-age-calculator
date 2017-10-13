import { Galactic } from './../js/galactic.js';

describe('galactic', function() {
  let testGalacticEU;
  let testGalacticOC;
  let testGalacticAS;
  let testGalacticAF;

  beforeEach(function() {
  testGalacticEU = new Galactic('1987-09-12', 'Europe');
  testGalacticOC = new Galactic('1987-09-12', 'Oceania');
  testGalacticAS = new Galactic('1987-09-12', 'Asia');
  testGalacticAF = new Galactic('1987-09-12', 'Africa');
  });

  it('will return age on earth given birthdate', function() {
    expect(testGalacticEU.ageYears()).toEqual("30 years ago");
  });

  it('will return age on earth given birthdate in seconds', function() {
    expect(testGalacticEU.ageSeconds()).toEqual(946200000);
  });

  it('will return age on mercury in years', function() {
    expect(testGalacticEU.mercuryAgeYears()).toEqual(125);
  });

  it('will return age on venus in years', function() {
    expect(testGalacticEU.venusAgeYears()).toEqual(48.38709677419355);
  });

  it('will return age on mars in years', function() {
    expect(testGalacticEU.marsAgeYears()).toEqual(15.957446808510639);
  });

  it('will return age on jupiter in years', function() {
    expect(testGalacticEU.jupiterAgeYears()).toEqual(2.5295109612141653);
  });

  it('will return life expectancy based on home continent: North America or Europe', function() {
    testGalacticEU.lifeExpect();
    expect(testGalacticEU.expectancy).toEqual(51);
  });

  it('will return life expectancy based on home continent: South America or Oceania', function() {
    testGalacticOC.lifeExpect();
    expect(testGalacticOC.expectancy).toEqual(49);
  });

  it('will return life expectancy based on home continent: Asia', function() {
    testGalacticAS.lifeExpect();
    expect(testGalacticAS.expectancy).toEqual(49);
  });

  it('will return life expectancy based on home continent: Africa', function() {
    testGalacticAF.lifeExpect();
    expect(testGalacticAF.expectancy).toEqual(49);
  });
});
