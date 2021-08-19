$(function(){
    $(".roller, .exp").click(function(){
        $('body, html').animate({scrollTop:$('#edu').offset().top},800);
        return false;
    })  
    $(".gioithieu").click(function(){
        $('body, html').animate({scrollTop:$('#gioithieu').offset().top},800);
        return false;
    })
    $(".cont, .hire_button").click(function(){
        $('body, html').animate({scrollTop:$('#contact').offset().top},800);
        return false;
    })
    $(".duan").click(function(){
        $('body, html').animate({scrollTop:$('#duan').offset().top},800);
        return false;
    })
})

var grid = document.querySelector('.grid');
var msnry = new Masonry( grid, {
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});


