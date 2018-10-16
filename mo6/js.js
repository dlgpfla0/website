$(document).ready(function(){
    var wd=parseInt($(".main1").width());
    var cnt=$(".main1 .slider li").length;
    var n=0;
    $(".main1 .slider li").eq(0).css("z-index", "30").css("left", "0px");
    $(".main1 .slider li").eq(0).siblings().css("z-index", "25").css("left", wd+"px");
    var intv=setInterval(function(){
        nAni();
    }, 3000);
    
    function nAni(){
        $(".main1 .slider li").eq(0).appendTo($(".main1 .slider"));
        $(".main1 .slider li").eq(0).css("z-index", "30");
        $(".main1 .slider li").eq(0).siblings().css("z-index", "25");
        $(".main1 .slider li").eq(0).not(":animated").animate({"left" : "0px"}, 800, function() {
            $(".main1 .slider li").eq(0).siblings().css("left", wd+"px");
        });
    }
});

/*
$(document).ready(function(){
    var wd=parseInt($(".main1").width());
    var cnt=$(".main1 .slider li").length;
    var n=0;
    $(".main1 .slider li").eq(0).css("z-index", "30").css("left", "0px");
    $(".main1 .slider li").eq(0).siblings().css("z-index", "25").css("left", wd+"px");
    var intv=setInterval(function(){
        if(n<cnt-1) {
            n=n+1;
            nAni(n);
        } else {
            n=0;
            nAni(n);
        }
    }, 3000);
    
    function nAni(i){
        $(".main1 .slider li").eq(i).siblings().css("z-index", "25");
        $(".main1 .slider li").eq(i).css("z-index", "30").not(":animated").animate({"left" : "0px"}, 800, function(){
            $(".main1 .slider li").eq(i).siblings().css("left", wd+"px");
        });
    }
});
*/