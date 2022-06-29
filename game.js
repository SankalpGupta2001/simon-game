
var buttonColours=["red", "blue", "green", "yellow"]
var gamePattern=[];
var userClickedPattern=[];
var level=0;
var started=false;

$(document).keypress(function(){
  if(!started)
  {
    $("#big-title").text("Level"+level);
    nextSequence();
    started=true;

  }

});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {
  if(gamepattern[currentLevel] === userClickedPattern[currentLevel])
  {
    if(gamePattern.length === userClickedPattern.length)
    {
      setTimeout(function(){
        nextSequence();
      },1000);
    }
  }
  else{
    playSound("wrong");
    $("body").addClass("game-over");
    $("#big-title").text("Game Over, Press Any Key to Restart")
    setTimout(function(){
      $("body").removeClass("game-over");

    },200);

    startover();
  }
  
}



//This function is for mainly for computer pattern 
function nextSequence(){
  userClickedPattern=[];
  level++;
  $("#level-title").text("Level " + level);
  randomNumber=Math.floor(Math.random()*4);
  var randomChosenColour=buttonColours[randomNumber];
  gamePatttern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);

}
function playSound(x){
  var audio= new Audio("sounds/"+x+".mp3");
  audio.play();

}
function animateflash(y)
{
  $("#"+y).addClass("pressed");
  setTimeout(function(){
    $("#"+y).removeClass("pressed");
  },100);
}
function startover(){
  level=0;
  started=false;
  gamePattern=[];
}
