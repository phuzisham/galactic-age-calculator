import { Galactic } from './../js/galactic.js';

$(document).ready(function() {
  $('#galacticForm').submit(function(event) {
    event.preventDefault();

    let birthdate = $('#birthdate').val();
    let continent = $('#homeContinent').val();
    let newGalactic = new Galactic(birthdate, continent);

    $('#earthYears').text(newGalactic.ageYears());
    $('#earthSeconds').text(newGalactic.ageSeconds());
    $('#mercuryYears').text(newGalactic.mercuryAgeYears());
    $('#venusYears').text(newGalactic.venusAgeYears());
    $('#marsYears').text(newGalactic.marsAgeYears());
    $('#jupiterYears').text(newGalactic.jupiterAgeYears());
    $('#continent').text(newGalactic.continent);
    newGalactic.lifeExpect();
    if (newGalactic.expectancy <= 0) {
      $('#lifeExpect').text('You\'re on borrowed time.');
    } else {
      $('#lifeExpect').text(newGalactic.expectancy);
    }
    $('#result').show(800);
  });
});
