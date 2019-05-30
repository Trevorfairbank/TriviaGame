//You'll create a trivia form with multiple choice or true/false options (your choice).

//The player will have a limited amount of time to finish the quiz. 
        
//The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.
        
//Don't let the player pick more than one answer per question.
        
//Don't forget to include a countdown timer.

//target the button and on click, display new page
var number = 60;
var timer;

$("#btn").on("click",function(){
//get rid of button
    $("#btn").detach();
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
    $(".container").append(timeRemaining);

var questionOne = $("<p>").text("What species is the largest living bird?");
var newDiv = $("<div>");
var inputOne = $("<input type=radio>");
var labelOne = $("<label>").text(" " + "answer goes here");
var inputTwo = $("<input type=radio>");
var labelTwo = $("<label>").text(" " + "answer goes here");
var inputThree = $("<input type=radio>");
var labelThree = $("<label>").text(" " + "answer goes here");
var inputFour = $("<input type=radio>");
var labelFour = $("<label>").text(" " + "answer goes here");

    $(".container").append(questionOne);
    $(".container").append(newDiv,inputOne,labelOne,inputTwo,labelTwo,inputThree,labelThree,inputFour,labelFour);
    
});