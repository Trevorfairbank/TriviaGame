//You'll create a trivia form with multiple choice or true/false options (your choice).

//The player will have a limited amount of time to finish the quiz. 
        
//The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
        
//Don't let the player pick more than one answer per question.
        
//Don't forget to include a countdown timer.

//target the button and on click, display new page
var number = 120;
var timer;

$("#questions").hide();
$("#submit").hide();
$("#results").hide();



$("#start").on("click",function(){
//get rid of button
    $("#start").detach();
//create new text that says time remaining
//create a count down from 60 seconds
function run() {
    clearInterval(timer);
    timer = setInterval(countDown, 1000);
  }


function countDown() {
    number--;
    $(timeRemaining).text("Time Remaining: " + number);
    if (number === 0) {
      stop();
      alert("Time Up!");
    }
  }
  function stop() {
    clearInterval(timer);
  }

var timeRemaining = $("<p>").text("Time Remaining : " + run())
    $("#timer").append(timeRemaining);

//show questions and submit button
$("#questions").show();
$("#submit").show();
});

$("#submit").on("click",function(){
    $("#questions").hide();
    $("#submit").hide();
    $("#timer").hide();
    stop();
    $("#results").show();

});

