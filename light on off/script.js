"use strict"; // javascript goes here...

document.querySelector('.power-button').addEventListener('click', function() {
  document.querySelector('.light-bulb-on').classList.toggle('inactive');
  document.querySelector('.light-bulb-off').classList.toggle('inactive');
});