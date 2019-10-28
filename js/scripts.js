$(document).ready(function() {
  $("#userData").submit(function(event) {
    event.preventDefault();

var q1 = $("#q1").val();
var q2 = $("#q2").val();
var q3 = $("#q3").val();
var q4 = $("#q4").val();

var test1 = [];




test1.push(q1, q2, q3, q4);
test1.splice("YOU CUT OFF MY ARM!");
console.log("I EXIST LOOK AT MEEEEEEEEEEEEEEE!!!!!!!!", test1);




$("#output").text(q1 + " " + q2 + " " + q3 + " " + q4);
  });
});
