$(document).ready(function(){
    $("#gnb li, #gnb li a").hover(function(){
        $(this).find(".sub").stop().slideDown(700);
    });
    $("#gnb li").mouseleave(function(){
        $(this).find(".sub").stop().slideUp(100);
    });
});



$(document).ready(function(){
    var ht=$(".mainSlider .imgFrame img").height();
    $(".mainSlider, .mainSlider .imgFrame").height(ht);
    
    var wd=parseInt($(".mainSlider").width());
    var cnt=$(".mainSlider .imgFrame li").length;
    var n=0;
    $(".mainSlider .imgFrame li").eq(0).css("z-index", "30").css("opacity", "1");
    $(".mainSlider .imgFrame li").eq(0).siblings().css("z-index", "25").css("opacity", "0");
    var intv=setInterval(function(){
        if(n<cnt-1) {
            n=n+1;
            nAni(n);
        } else {
            n=0;
            nAni(n);
        }
    }, 5000);
    
    function nAni(i) {
        $(".mainSlider .imgFrame li").eq(i).siblings().css("z-index", "25");
        $(".mainSlider .imgFrame li").eq(i).css("z-index", "30").not(":animated").animate({"opacity" : "1"}, 800, function(){
            $(".mainSlider .imgFrame li").eq(i).siblings().css("opacity", "0");
        });
    }
});



$(document).ready(function(){
    var wd=parseInt($("#slider").width());
    var cnt=$(".sliderBox li").length;
    var maxAni=(cnt-1)*wd*-1;
    
    function leftAni() {
        var mar = parseInt($(".sliderBox").css("margin-left"));
        if(mar<0) {
            $(".sliderBox").not(":animated").animate({"margin-left" : "+="+wd+"px"}, 800);
        } else {
            $(".sliderBox").not(":animated").animate({"margin-left" : maxAni+"px"}, 800);
        }
    }
    function rightAni() {
        var mar=parseInt($(".sliderBox").css("margin-left"));
        if(mar>maxAni){
            $(".sliderBox").not(":animated").animate({"margin-left" : "-="+wd+"px"}, 800);
        } else {
            $(".sliderBox").not(":animated").animate({"margin-left" : "0px"}, 800);
        }
    }
    var intv=setInterval(function(){ rightAni(); }, 4000);
    $(".pagination button").click(function(){
        var th=parseInt($(this).attr("data-val"));
        clearInterval(intv);
        $(".sliderBox").not(":animated").animate({"margin-left" : th*wd*-1+"px"}, 800);
        intv=setInterval(function(){ rightAni(); }, 4000);
    });
});

