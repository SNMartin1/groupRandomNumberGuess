console.log("working!");
var difficulty;
var targetNumber;
var player1;
var player2;
var player3;
var player4;
var guessesArray = [];

  $(document).ready(function(){


//starting easy mode
$('#easy-mode').on('click',function(){
  $('.container').empty();
  $('.container').append('<p class="easy-select">You have selected easy mode.  Guess a number between 1-100. To start the game please press Start.</p>');
   difficulty = 'easy';
  });//end of easy mode
  $('#medium-mode').on('click',function(){
    $('.container').empty();
    $('.container').append('<p class="medium-select">You have selected medium mode.  Guess a number between 1-1,000. To start the game please press Start.</p>');
    difficulty = 'medium';
  });//end of medium mode
    $('#hard-mode').on('click',function(){
      $('.container').empty();
      $('.container').append('<p class="hard-select">You have selected hard mode.  Guess a number between 1-10,000. To start the game please press Start.</p>');
      difficulty='hard';
    });//end of hard mode


    $('#start').on('click', function(){
      console.log('start click');
      switch (difficulty) {
        case 'easy':
        randomNumber(1, 10);
        console.log('selected easy mode');
console.log(targetNumber);
        break;

        case 'medium':
        console.log('selected medium mode');
        randomNumber(1, 100);
console.log(targetNumber);
        break;
        case 'hard':
        console.log('selected hard mode');
          randomNumber(1, 10000);
          break;
        default:
console.log(targetNumber);
      }

    });

//console.log(player1);
//console.log(player2);

$('#submit-guess').on('click', function() {
    console.log('submit guess worked');
    player1 = $('#player1').val();
    player2 = $('#player2').val();
    player3 = $('#player3').val();
    player4 = $('#player4').val();
    console.log(player1);
    console.log(player2);
    console.log(player3);
    console.log(player4);
    guessesArray.push(player1);
    guessesArray.push(player2);
    guessesArray.push(player3);
    guessesArray.push(player4);
console.log(guessesArray);
compare();
});


  });//end of document.ready
  function randomNumber(min, max){
    targetNumber = Math.floor(Math.random() * (1 + max - min) + min);
    //console.log(targetNumber);
    return targetNumber;

}

function compare() {
for (var i = 0; i < guessesArray.length; i++) {
  if (guessesArray[i] == targetNumber ) {
    console.log('winner winner chicken dinner');
  } else if (guessesArray[i] > targetNumber) {
    console.log("guess lower");
  } else if (guessesArray[i] < targetNumber) {
    console.log("guess higher");
  }
} //end of the for loop if else function






}
