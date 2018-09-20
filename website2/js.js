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
    var wd=parseInt($(".mainSlider1").width());
    var cnt=$(".mainSlider1 .imgFrame1 li").length;
    var intv=setInterval(function(){ nAni(); }, 3000);
    
    function nAni(){
        $(".mainSlider1 .imgFrame1").not(":animated").animate({"margin-left" : -wd+"px"}, 700, function(){
            $(".mainSlider1 .imgFrame1 li").eq(0).appendTo($(".mainSlider1 .imgFrame1"));
            $(".mainSlider1 .imgFrame1").css("margin-left", "0px");
        });
        function pAni(){
            $(".mainSlider1 .imgFrame1 li").eq(cnt-1).prependTo($(".mainSlider1 .imgFrame1"));
            $(".mainSlider1 .imgFrame1").css("margin-left", -wd+"px");
            $(".mainSlider1 .imgFrame1").not(":animated").animate({"margin-left" : "0px"}, 700);
        };
        $(".btnBox .left").click(function(){
            clearInterval(intv);
            pAni();
            intv=setInterval(function(){ nAni(); }, 3000);
        });
        $(".btnBox .right").click(function(){
            clearInterval(intv);
            nAni(); intv=setInterval(function(){ nAni(); }, 3000);
        });
    };
});

