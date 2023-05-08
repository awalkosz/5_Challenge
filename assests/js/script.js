// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var dateNow = dayjs().format('dddd ' + 'MMM D, YYYY');
$('#currentDay').text(dateNow);

var saveBtn = $('.saveBtn');

$(document).ready(function () {
  $('.saveBtn').on('click', function () {
    var text = $(this).siblings('.description').val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(text, time);
  });
});

$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));
$("#hour-18 .description").val(localStorage.getItem("hour-18"));

var present = dayjs().hour();
var timeBlock = $('.time-block');

function block() {
  $('.time-block').each(function () {
    var timeInBlock = parseInt($(this).attr('id').split('-')[1]);

    if (timeInBlock < present) {
      $(this).addClass('past');
    }
    else if (timeInBlock === present) {
      $(this).addClass('present');
    }
    else {
      $(this).addClass('future');
}});}

block();
