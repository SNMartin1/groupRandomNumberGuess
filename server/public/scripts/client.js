console.log("working!");
  $(document).ready(function(){

//starting easy mode
$('#easy-mode').on('click',function(){
  $('.container').empty();
  $('.container').append('<p class="easy-select">You have selected easy mode.  Guess a number between 1-100. To start the game please press Start.</p>');
  });//end of easy mode
  $('#medium-mode').on('click',function(){
    $('.container').empty();
    $('.container').append('<p class="medium-select">You have selected medium mode.  Guess a number between 1-1,000. To start the game please press Start.</p>');
  });//end of medium mode
    $('#hard-mode').on('click',function(){
      $('.container').empty();
      $('.container').append('<p class="hard-select">You have selected hard mode.  Guess a number between 1-10,000. To start the game please press Start.</p>');
    });//end of hard mode



  });//end of document.ready

  function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
