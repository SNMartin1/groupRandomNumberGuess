console.log("working!");
var difficulty;
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
        console.log('selected easy mode');

          break;
          case 'medium':
console.log('selected medium mode');

            break;
            case 'hard':
console.log('selected hard mode');

              break;
        default:

      }

    });


  });//end of document.ready
  function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
