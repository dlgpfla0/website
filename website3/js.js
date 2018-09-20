$(document).ready(function(){
    $(".hdWrap .mainMenu, .hdWrap .mainMenu .sub").hover(function(){
        $(this).find(".sub").stop().slideDown(700);
    });
    $(".hdWrap .mainMenu").mouseleave(function(){
        $(this).find(".sub").stop().slideUp(100);
    });
});


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
    var wd=parseInt($(".mainSlider").width());
    var intv=setInterval(function(){ nAni(); }, 3000);
    
    function nAni(){
        $(".mainSlider .imgFrame").not(":animated").animate({"margin-left" : -wd+"px"}, 500, function(){
            $(".mainSlider .imgFrame li").eq(0).appendTo($(".mainSlider .imgFrame"));
            $(".mainSlider .imgFrame").css("margin-left", "0px");
        });
    };
});

