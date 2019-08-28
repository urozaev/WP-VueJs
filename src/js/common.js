'use strict';

//Active elements
$(function() {
  $('#filter .sort-button').click(function() {
    $('#filter .sort-button').removeClass('active');
    $(this).addClass('active')
  });

  $('#sorting .sort-button').click(function() {
    $('#sorting .sort-button').removeClass('active');
    $(this).addClass('active')
  });
});