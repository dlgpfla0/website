$(document).ready(function(){
    var ht=$(".main1 .imgBox img").height();
    $(".main1, .main1 .imgBox").height(ht);
    
    var wd=parseInt($(".main1").width());
    var cnt=$(".main1 .imgBox li").length;
    var n=0;
    $(".main1 .imgBox li").eq(0).css("z-index", "30").css("left", "0px");
    $(".main1 .imgBox li").eq(0).siblings().css("z-index", "25").css("left", wd+"px");
    var intv=setInterval(function(){
        if(n<cnt-1){
            n=n+1;
            nAni(n);
        } else {
            n=0;
            nAni(n);
        }
    }, 3000);
    
    function nAni(i){
        $(".main1 .imgBox li").eq(i).siblings().css("z-index", "25");
        $(".main1 .imgBox li").eq(i).css("z-index", "30").not(":animated").animate({"left" : "0px"}, 800, function(){
            $(".main1 .imgBox li").eq(i).siblings().css("left", wd+"px");
        });
        $(".imgBox buton").eq(i).siblings().removeClass("on");
        $(".imgBox button").eq(i).addClass("on");
    }
    $(".left").click(function(){
        clearInterval(intv);
        if(n>0){
            n=n-1;
            nAni(n);
        } else {
            n=cnt-1;
            nAni(n);
        }
        intv=setInterval(function(){
            if(n<cnt-1){
                n=n+1;
                nAni(n);
            } else {
                n=0;
                nAni(n);
            }
        }, 3000);
    });
    $(".right").click(function(){
        clearInterval(intv);
        if(n<cnt-1){
            n=n+1;
            nAni(n);
        } else {
            n=0;
            nAni(n);
        }
        intv=setInterval(function(){
            if(n<cnt-1){
                n=n+1;
                nAni(n);
            } else {
                n=0;
                nAni(n);
            }
        }, 3000);
    });
});

$(document).ready(function(){
    
    var wd=parseInt($(".ft_banner").width());
    var cnt=$(".ft_banner .banBox li").length;
    var n=0;
    $(".ft_banner .banBox li").eq(0).css("z-index", "30").css("left", "0px");
    $(".ft_banner .banBox li").eq(0).siblings().css("z-index", "25").css("left", wd+"px");
    var intv=setInterval(function(){
        if(n<cnt-1){
            n=n+1;
            nAni(n);
        } else {
            n=0;
            nAni(n);
        }
    }, 3000);
    
    function nAni(i){
        $(".ft_banner .banBox li").eq(i).siblings().css("z-index", "25");
        $(".ft_banner .banBox li").eq(i).css("z-index", "30").not(":animated").animate({"left" : "0px"}, 800, function(){
            $(".ft_banner .banBox li").eq(i).siblings().css("left", wd+"px");
        });
    }
});