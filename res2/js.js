$(document).ready(function(){
    $(".lstBtn").click(function(){
        $("#pnb").addClass("on");
    });
    $(".closeBtn").click(function(){
        $("#pnb").removeClass("on");
    });
    $(".iconLst li").mouseover(function(){
        var idx=$(this).index()+1;
        var src="url(./images/main2_hoverBG"+idx+".png)";
        $("#page1").css("background-image",src);
    });
    $(".iconLst li").mouseout(function(){
        var src="url(./images/main2_hoverBG1.png)";
        $("#page1").css("background-image",src);
    });
    $(window).resize(function(){
        var wdx=parseInt($(window).width());
        var sw=[true, true];
        if(wdx<=767) {
            $("#pnb .logo img").attr("src", "./images/main_logo.png");
            $("#pnb li .after").text("+");
            
            $("#pnb .menuGroup li.menuTit").click(function(){
                var idx=$(this).parents(".menuGroup").index();
                if(sw[idx]==true){
                    $(this).find(".after").text("-");
                    $(this).siblings("li").animate({"line-height" : "40px"}, 500);
                    $(this).siblings("li").find("li").animate({"line-height" : "40px"}, 500);
                    $(this).parents(".menuGroup").siblings().find("li").not(".menuTit").animate({"line-height" : "0px"}, 500);
                    $(this).parents(".menuGroup").siblings().find("li").not(".menuTit").find("li").animate({"line-height" : "0px"}, 500);
                    $(this).parents(".menuGroup").siblings().find(".after").text("+");
                } else {
                    $(this).find(".after").text("+");
                    $(this).siblings("li").animate({"line-height" : "0px"}, 500);
                }
                sw[idx]= !sw[idx];
            });
            $("#vsBox li").each(function(index){
                var sc1="./images/main1"+index+"_IMG.png";
                $(this).find(".pic.item").attr("src", sc1);
            });
            $(".controlBox li").eq(0).css("display", "none");
            $(".controlBox li").eq(1).addClass("on");
            $(".picFrame img").attr("src", "./images/mobile.png");
        } else if(wdx>=768) {
            $("#pnb li .after").text("");
            $(".controlBox li").eq(0).css("display", "block");
            $(".controlBox li").eq(1).removeClass("on");
            $("#vsBox li").each(function(index){
                var sc1="./images/main1"+index+".png";
                $(this).find(".pic.item").attr("src", sc1);
            });
            $(".picFrame img").attr("src", "./images/desktop.png");
        };
    });
});