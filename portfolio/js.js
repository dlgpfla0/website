$(document).ready(function(){
    $("#gnb .gnb_about").click(function(){
        var position=$("section.about").offset();
        $("body").stop().animate({scrollTop:position.top}, 500);
    });
    $("#gnb .gnb_ability").click(function(){
        var position=$(".ability").offset();
        $("body").stop().animate({scrollTop:position.top}, 500);
    });
});



/* portfolio tab 구현 */
$(document).ready(function(){
    $(".tab_content").hide();
    $(".tab_content:first").show();
    
    $("ul.tabs li").click(function(){
        $("ul.tabs li").removeClass("active").css("color", "#acacac");
        $(this).addClass("active").css("color", "#000");
        $(".tab_content").hide()
        var activeTab=$(this).attr("rel");
        $("#" + activeTab).fadeIn();
    });
});


/* 팝업 구현 */
$(document).ready(function(){
    cookiedata=document.cookie;
    if (cookiedata.indexOf("maindiv=done") < 0) {
        document.all['divpop'].style.visibility = "visible";
    }
    else {
        document.all['divpop'].style.visibility = "hidden";
    }
    
    function setCookie( name, value, expiredays) {
        var todayDate = new Date();
        todayDate.setDate( todayDate.getDate() + expiredays );
        document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
    }
    $(".popborder .close").click(function(){
        $("#divpop").fadeOut(500, function(){
            $(this).find(".popborder").empty();
        });
    });
});

/* 타이핑 */