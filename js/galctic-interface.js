import { Galactic } from './../js/galactic.js';

$(document).ready(function() {
  $('#galacticForm').submit(function(event) {
    event.preventDefault();

    let birthdate = $('#birthdate').val();
    let continent = $('#continent :selected').text();
    let newGalactic = new Galactic(birthdate, continent);

    $('#earthYears').text(newGalactic.ageYears());
    $('#earthSeconds').text(newGalactic.ageSeconds());
    $('#mercuryYears').text(newGalactic.mercuryAgeYears());
    $('#venusYears').text(newGalactic.venusAgeYears());
    $('#marsYears').text(newGalactic.marsAgeYears());
    $('#jupiterYears').text(newGalactic.jupiterAgeYears());
    newGalactic.lifeExpect();
    $('#continent').text(newGalactic.continent)
    $('#lifeExpect').text(newGalactic.expectancy);
    $('#result').show(800);
  })
});
