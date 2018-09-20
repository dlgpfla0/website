$(document).ready(function(){
    var ht=parseInt($(window).height());
    $(window).on("mousewheel", function(e){
        if(e.originalEvent.wheelDelta < 0){
            $("html, body").not(":animated").animate({scrollTop:"+="+ht+"px"}, 800);
        } else {
            $("html, body").not(":animated").animate({scrollTop:"-="+ht+"px"}, 800);
        }
        return false;
    });
});

$(document).ready(function(){
    $(".slide_img").mouseover(function(){
        $(this).find("img").stop().fadeTo(500, 0.6);
    });
    $(".slide_img").mouseout(function(){
        $(this).find("img").stop().fadeTo(500, 1);
    });
});

$(document).ready(function(){
    $(".gnb li, .gnb li a.dep1").hover(function(){
        $(this).find(".sub").stop().slideDown(700);
    });
    $(".gnb li").mouseleave(function(){
        $(this).find(".sub").stop().slideUp(100);
    });
})