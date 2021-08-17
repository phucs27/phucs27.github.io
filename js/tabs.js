$(document).ready(function(){
    $('.tabs div').click(function(){
        var tab = $(this).data().tab;
        $('.content div').removeClass('active');
        $('#' + tab).addClass('active');      
    })
});
