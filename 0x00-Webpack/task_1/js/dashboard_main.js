import $ from "jquery";
import { debounce } from "lodash";

let count = 0;

function updateCounter() {
    count += 1;
    $('#count').text(`${count} clicks on the button`)
}

$(function () {
  $("body").append("<p>Holberton Dashboard</p>");
  $("body").append("<p>Dashboard data for the students</p>");
  $("body").append("<button id='click'>Click here to get started</button>");
  $("body").append("<p><p id='count'></p></p>");
  $("body").append("<p>Copyright - Holberton School</p>");
   $('#click').on('click', debounce(updateCounter, 300));
});