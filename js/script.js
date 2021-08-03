$(function(){
    vitri = $('#edu').offset().top;
    $(".roller, .exp").click(function(){
        $('body, html').animate({scrollTop:vitri})
    })
})