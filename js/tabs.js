$(document).ready(function(){
    $('.tabs div').click(function(){
        var tab = $(this).data().tab;
        var colors = $(this).data().colors;

        $('.content div').removeClass('active');
        $('#' + tab).addClass('active');   
        
        $('.tabs div').removeClass('color');
        $('#' + colors).addClass('color'); 
    })
   
});
