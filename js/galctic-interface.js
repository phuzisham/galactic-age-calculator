import { Galactic } from './../js/galactic.js';

$(document).ready(function() {
  $('#galacticForm').submit(function(event) {
    event.preventDefault();

    let birthdate = $('#birthdate').val();
    let continent = $('#continent').val();
    let newGalactic = new Galactic(birthdate, continent);
  })
});
