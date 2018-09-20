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

/*
$(document).ready(function(){
    var Ht=$(window).height();
    var pageCnt=$(".page").length;
    $(window).scroll(function(){
        var scTop=$(window).scrollTop();
        if(scTop >= Ht*2){
            $(".Frame").fadeIn(1500);
        } else {
            $(".Frame").fadeOut(1500);
        }
        if(scTop >= 100) {
            $(".hd").slideDown(800);
        } else {
            $(".hd").slideUp(800);
        }
    });
});
*/

$(document).ready(function(){
    var wd=parseInt($(".mainSlider").width());
    var intv=setInterval(function(){ nAni(); }, 3000);
    
    function nAni() {
        $(".mainSlider .vs1_imgFrame").not(":animated").animate({"margin-left" : -wd+"px"}, 800, function(){
            $(".mainSlider .vs1_imgFrame li").eq(0).appendTo($(".mainSlider .vs1_imgFrame"));
            $(".mainSlider .vs1_imgFrame").css("margin-left", "0px");
        });
    }
});

$(document).ready(function(){
    $(".vs4_left").mouseover(function(){
        $(this).find(".left_bg").not(":animated").fadeTo(600, 0.6);
    });
    $(".vs4_left").mouseleave(function(){
        $(this).find(".left_bg").not(":animated").fadeTo(600, 1);
    });
});
$(document).ready(function(){
    $(".vs4_right").mouseover(function(){
        $(this).find(".right_bg").not(":animated").fadeTo(600, 0.6);
    });
    $(".vs4_right").mouseleave(function(){
        $(this).find(".right_bg").not(":animated").fadeTo(600, 1);
    });
});

$(document).ready(function(){
    $(".grdFrame").hover(function(){
        $(this).animate({
            
        })
    })
})