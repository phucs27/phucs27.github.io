$(function(){
    $(".roller, .exp").click(function(){
        $('body, html').animate({scrollTop:$('#edu').offset().top});
        return false;
    })  

    $(".sp").click(function(){
        $('body, html').animate({scrollTop:$('#portfolio').offset()});
        return false;
    })
    $(".cont").click(function(){
        $('body, html').animate({scrollTop:$('#contact').offset().top});
        return false;
    })
})

var grid = document.querySelector('.grid');
var msnry = new Masonry( grid, {
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});


