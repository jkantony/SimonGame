var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

function nextSequence(){
  var randomNumber = Math.floor(Math.random() * 4);
  gamePattern.push(buttonColours[randomNumber]);
  console.log(gamePattern);
}

//Makes animation when clicked
$("#green").click(function(){
  $("#green").fadeOut(100).fadeIn(100);
  
  var green = new Audio("sounds/green.mp3");
  green.play();

  $("#green").addClass("pressed");
  setTimeout(function(){
    $("#green").removeClass("pressed");
  }, 100); 

  level++;
  $("#level-title").text("level " + level);
});

$("#red").click(function(){
  $("#red").fadeOut(100).fadeIn(100);

  var red = new Audio("sounds/red.mp3");
  red.play();

   $("#red").addClass("pressed");
  setTimeout(function(){
    $("#red").removeClass("pressed");
  }, 100); 

  level++;
  $("#level-title").text("level " + level);
});

$("#yellow").click(function(){
  $("#yellow").fadeOut(100).fadeIn(100);

  var yellow = new Audio("sounds/yellow.mp3");
  yellow.play();

   $("#yellow").addClass("pressed");
  setTimeout(function(){
    $("#yellow").removeClass("pressed");
  }, 100); 

  level++;
  $("#level-title").text("level " + level);
});

$("#blue").click(function(){
  $("#blue").fadeOut(100).fadeIn(100);

  var blue = new Audio("sounds/blue.mp3");
  blue.play();

   $("#blue").addClass("pressed");
  setTimeout(function(){
    $("#blue").removeClass("pressed");
  }, 100); 

  level++;
  $("#level-title").text("level " + level);
});

$(".btn").click(function(){
  userClickedPattern.push(this.id);
});

// function checkAnswer (level) {
//   if(gamePattern[level] === userClickedPattern[level]) {
//     console.log("success!!");

//     if (gamePattern.length === userClickedPattern.length) {
//       setTimeout(function (){
//         nextSequence();
//       }, 1000);
//     }
//   }

//   else {
//     console.log("wrong :((");
//   }
// }

// checkAnswer();

nextSequence();