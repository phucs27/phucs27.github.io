$(function(){
    $(".roller, .exp").click(function(){
        $('body, html').animate({scrollTop:$('#edu').offset().top});
        return false;
    })  

    $(".sp").click(function(){
        $('body, html').animate({scrollTop:$('#portfolio').offset().top});
        return false;
    })
    $(".cont").click(function(){
        $('body, html').animate({scrollTop:$('#contact').offset().top});
        return false;
    })
})

