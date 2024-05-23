import $ from "jquery";
import _ from "lodash";
import "./body.css";

let count = 0;

function updateCounter() {
  count += 1;
  $("#count").text(`${count} clicks on the button`);
}

$("body").append("<button id='click'>Click here to get started</button>");
$("body").append("<p><p id='count'></p></p>");
$("#click").on("click", _.debounce(updateCounter, 500));
