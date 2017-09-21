$(function(){

  $('.char-count').keyup(function () {
    const max = 140;
    const len = $(this).val().length;

    $(this).parent().find('.counter').html(max - len);
    // apply class to change color
    if (len > max) {
      $(this).parent().find('span').css('color', 'red');
    } else {
      $(this).parent().find('span').css('color', 'black');
    }
  });

});

