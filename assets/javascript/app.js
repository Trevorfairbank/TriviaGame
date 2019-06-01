//You'll create a trivia form with multiple choice or true/false options (your choice).

//The player will have a limited amount of time to finish the quiz. 

//The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

//Don't let the player pick more than one answer per question.

//Don't forget to include a countdown timer.

//target the button and on click, display new page
var number = 120;
var timer = 120;
var correct = 0;
var incorrect = 0;
var unanswered = 0;

$("#questions").hide();
$("#submit").hide();
$("#results").hide();
$("#timer").hide();



$("#start").on("click", function () {
    //get rid of button
    $("#start").detach();
    $("#timer").show();
    //create a countdown from 60 seconds
    function run() {
        clearInterval(timer);
        timer = setInterval(countDown, 1000);
    }

    function countDown() {
        number--;
        $("#timer").text("Time Remaining: " + number);
        if (number === 0) {
            stop();
            alert("Time Up!");
        }
    }
    function stop() {
        clearInterval(timer);
    }

    run();

    

    //show questions and submit button
    $("#questions").show();
    $("#submit").show();
});


$("#submit").on("click", function () {
    $("#questions").hide();
    $("#submit").hide();
    $("#timer").hide();
    stop();
    $("#results").show();

//Question One
var userOne = $("input[name='bird']:checked").val();
var aOne = $("input[value='Ostrich']:checked").val()

if (aOne){
    correct++;
}
else if (!userOne){
    unanswered++;
}
else if (!aOne){
    incorrect++;
}

//Question Two
var userTwo = $("input[name='country']:checked").val();
var aTwo = $("input[value='Greenland']:checked").val()

if (aTwo){
    correct++;
}
else if (!userTwo){
    unanswered++;
}
else if (!aTwo){
    incorrect++;
}

//Question Three
var userThree = $("input[name='fly']:checked").val();
var aThree = $("input[value='Bat']:checked").val()

if (aThree){
    correct++;
}
else if (!userThree){
    unanswered++;
}
else if (!aThree){
    incorrect++;
}

    $("#correct").append(correct);
    $("#incorrect").append(incorrect);
    $("#unanswered").append(unanswered);

});

