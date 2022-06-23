// JavaScript Documen
$(function(){
  $('.header__mobile-menu').on('click', function(){
    $(this).toggleClass('open');
    $('.header__navigation').toggleClass('open');
  })
})