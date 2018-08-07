$(function(){
    //for fill scree background img
    $(window).on("load resize",function(){
        $(".fill-screen").css("height",window.innerHeight);
    })
    //for navbar selection at top while scrolling up and down
    $('body').scrollspy({
        target : '.navbar',
        offset : 150
    });
    //for scroling when we cilck on any link at top 
    $('nav a').bind('click',function(){
        $($(this).attr('href')).animatescroll({scrollspeed : 3000 , padding : 50});
        event.preventDefault();
    })
    //for progress bar
    $('.progress-bar').each(function(){
        var bar_value=$(this).attr('aria-valuenow') + '%';
        $(this).animate({width:bar_value},{duration :2000, eas : 'easeOutCirc'});
        });
})