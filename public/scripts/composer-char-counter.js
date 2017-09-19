$(document).ready(function(){
 //$("#msgid").html("This is Hello World by JQuery");
  function handleNegativeValues(value) {
    // do stuff if the value is negative
    // select the p tag that holds the length
    // change text to red
  }

  $('.char-count').keyup(function () {
  const max = 140;
  let len = $(this).val().length;
  if (len >= max) {
    $('.counter').val(' you have reached the limit');
  } else {
    let char = max - len;
    $('.counter').val(char + ' characters left');
    console.log(char);
  }
  });

});

