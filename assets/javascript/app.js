//You'll create a trivia form with multiple choice or true/false options (your choice).

//The player will have a limited amount of time to finish the quiz.

//The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

//Don't let the player pick more than one answer per question.

//Don't forget to include a countdown timer.

//target the button and on click, display new page

$("#questions").hide();
$("#submit").hide();
$("#results").hide();
$("#timer").hide();

$("#start").on("click", function() {
  var number = 100;
  var timer;
  var correct = 0;
  var incorrect = 0;
  var unanswered = 0;
  //get rid of button
  $("#start").detach();
  $("#timer").show();
  //create a countdown from 60 seconds
  // function run() {
  //     clearInterval(timer);
  //     timer = setInterval(countDown, 1000);
  // }

  function stop() {
    clearInterval(timer);
  }
  function countDown() {
    number--;
    $("#timer").text("Time Remaining: " + number);
    if (number === 0) {
      stop();
      results();
      $("#questions").hide();
      $("#submit").hide();
      $("#timer").hide();
      $("#results").show();
    }
  }

  //show questions and submit button
  $("#questions").show();
  $("#submit").show();

  $("#submit").on("click", function() {
    $("#questions").hide();
    $("#submit").hide();
    $("#timer").hide();
    stop();
    $("#results").show();
    results();
  });

  function results() {
    //Question One
    var userOne = $("input[name='bird']:checked").val();
    var aOne = $("input[value='Ostrich']:checked").val();

    if (aOne) {
      correct++;
    } else if (!userOne) {
      unanswered += 1;
    } else if (!aOne) {
      incorrect++;
      $("#answer").append(`
      <div class="answer-box">
        <small>Question One</small><h2>What is the largest living bird?</h2>
        <h5>Ostrich</h5>
      </div>
      `);
    }

    //Question Two
    var userTwo = $("input[name='ferret']:checked").val();
    var aTwo = $("input[value='business']:checked").val();

    if (aTwo) {
      correct++;
    } else if (!userTwo) {
      unanswered++;
    } else if (!aTwo) {
      incorrect++;
      $("#answer").append(`
      <div class="answer-box">
        <small>Question Two</small><h2>What is a group of ferrets called?</h2>
        <h5>Business</h5>
      </div>
      `);
    }

    //Question Three
    var userThree = $("input[name='fly']:checked").val();
    var aThree = $("input[value='Bat']:checked").val();

    if (aThree) {
      correct++;
    } else if (!userThree) {
      unanswered++;
    } else if (!aThree) {
      incorrect++;
      $("#answer").append(`
      <div class="answer-box">
        <small>Question Three</small><h2>What mammal flies?</h2>
        <h5>Bat</h5>
      </div>
      `);
    }

    //Question Four
    var userFour = $("input[name='fish']:checked").val();
    var aFour = $("input[value='whaleshark']:checked").val();

    if (aFour) {
      correct++;
    } else if (!userFour) {
      unanswered++;
    } else if (!aFour) {
      incorrect++;
      $("#answer").append(`
      <div class="answer-box">
        <small>Question Four</small><h2>What is the world's largest fish?</h2>
        <h5>Whale Shark</h5>
      </div>
      `);
    }
    //Question Five
    var userFive = $("input[name='tall']:checked").val();
    var aFive = $("input[value='giraffe']:checked").val();

    if (aFive) {
      correct++;
    } else if (!userFive) {
      unanswered++;
    } else if (!aFive) {
      incorrect++;
      $("#answer").append(`
      <div class="answer-box">
        <small>Question Five</small><h2>Which animal has the highest blood pressure?</h2>
        <h5>Giraffe</h5>
      </div>
      `);
    }

    //Question Six
    var userSix = $("input[name='slow']:checked").val();
    var aSix = $("input[value='sloth']:checked").val();

    if (aSix) {
      correct++;
    } else if (!userSix) {
      unanswered++;
    } else if (!aSix) {
      incorrect++;
      $("#answer").append(`
      <div class="answer-box">
        <small>Question Six</small><h2>What is the world's slowest animal?</h2>
        <h5>Sloth</h5>
      </div>
      `);
    }

    //Question Seven
    var userSeven = $("input[name='zebra']:checked").val();
    var aSeven = $("input[value='dazzle']:checked").val();

    if (aSeven) {
      correct++;
    } else if (!userSeven) {
      unanswered++;
    } else if (!aSeven) {
      incorrect++;
      $("#answer").append(`
      <div class="answer-box">
        <small>Question Seven</small><h2>What is a group of Zebras called?</h2>
        <h5>Dazzle</h5>
      </div>
      `);
    }

    //Question Eight
    var userEight = $("input[name='skin']:checked").val();
    var aEight = $("input[value='black']:checked").val();

    if (aEight) {
      correct++;
    } else if (!userEight) {
      unanswered++;
    } else if (!aEight) {
      incorrect++;
      $("#answer").append(`
      <div class="answer-box">
        <small>Question Eight</small><h2>What color is a polar bear’s skin?</h2>
        <h5>Black</h5>
      </div>
      `);
    }

    //Question Nine
    var userNine = $("input[name='flap']:checked").val();
    var aNine = $("input[value='70']:checked").val();

    if (aNine) {
      correct++;
    } else if (!userNine) {
      unanswered++;
    } else if (!aNine) {
      incorrect++;
      $("#answer").append(`
      <div class="answer-box">
        <small>Question Nine</small><h2>How many times can a hummingbird flap its wings per second?</h2>
        <h5>70</h5>
      </div>
      `);
    }

    //Question Ten
    var userTen = $("input[name='flamboyance']:checked").val();
    var aTen = $("input[value='flamingos']:checked").val();

    if (aTen) {
      correct++;
    } else if (!userTen) {
      unanswered++;
    } else if (!aTen) {
      incorrect++;
      $("#answer").append(`
      <div class="answer-box">
        <small>Question Ten</small><h2>A flamboyance is a group of what animals?</h2>
        <h5>Flamingos</h5>
      </div>
      `);
    }

    $("#correct").append(correct);
    $("#incorrect").append(incorrect);
    $("#unanswered").append(unanswered);
  }

  function run() {
    clearInterval(timer);
    timer = setInterval(countDown, 1000);
  }

  run();
});
