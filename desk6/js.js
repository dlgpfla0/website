$(document).ready(function(){
    $("#gnb li, #gnb li a").hover(function(){
        $(this).find(".sub").stop().slideDown(700);
    });
    $("#gnb li").mouseleave(function(){
        $(this).find(".sub").stop().slideUp(100);
    });
});


$(document).ready(function(){
    var idx;
    $(".fnb li, .ft_subFrame ul").hover(function(){
        $(".ft_subFrame").stop().fadeIn(700);
        idx=$(this).index();
        $(".fnb li").eq(idx).addClass("on");
        $(".fnb li").eq(idx).siblings().removeClass("on");
    });
    $(".fnb li, .ft_subFrame ul").mouseleave(function(){
        $(".ft_subFrame").stop().fadeOut(100);
        $(".fnb li").removeClass("on");
    });
});


/* 메인비주얼 슬라이딩 */
/*
$(document).ready(function(){
    function visual() {
        if(!$(".main").length){
            return;
        }
        
        var visual=$(".main"),
            ctrlBtn=$(".btnBox a"),
            visualList=$(".imgBox li"),
            btnStop=$(".btn-stop"),
            btnPlay=$(".btn-play"),
            max=visualList.size()-1,
            current=0,
            auto,
            autoPlay=true, //자동재생
            start=2, //시작설정 0부터 시작
            playSpeed=6000; //6초
        
        function show(num) {
            ctrlBtn.eq(num).addClass('active');
            visualList.eq(num).fadeIn().addClass('active');
        }
        
        function next() {
            var n=current;
            if(n < max) {
                n++;
            } else {
                n=0;
            }
            return n;
        }
        
        function clear(num) {
            ctrlBtn.eq(num).removeClass('active');
            visualList.eq(num).fadeOut().removeClass('active');
        }
        
        function play() {
            ctrlBtn.eq(next()).trigger('click');
        }
        
        ctrlBtn.eq(start).addClass('active');
        show(start);
        
        ctrlBtn.each(function(index){
            $(this).data('number', index);
        });
        
        current = start;
        
        if(autoPlay) {
            auto = setInterval(play, playSpeed);
            btnStop.addClass('active');
        }
        
        ctrlBtn.on('click', function(e){
            e.preventDefault();
            var idx = $(this).data('number');
            clear(current);
            show(idx);
            current=idx;
        });
        
        ctrlBtn.hover(
            function() {
                if(autoPlay) {
                    clearInterval(auto);
                }
            },
                function() {
                    if(autoPlay) {
                        auto = setInterval(play, playSpeed);
                    }
                }
        );
        
        btnStop.on('click', function(e){
            e.preventDefault();
            clearInterval(auto);
            
            btnStop.removeClass('active');
            btnStop.addClass('active');
            autoPlay = true;
        });
        
    }
    //end Visual
    
    return {
        visual : visual,
    }
});
*/

/*
$(document).ready(function(){
    var ht=$(".main .imgBox img").height();
    $(".main, .main .imgBox").height(ht);
    
    var wd=parseInt($(".main").width());
    var cnt=$(".main .imgBox li").length;
    var n=0;
    $(".main .imgBox li").eq(0).css("z-index", "30").css("left", "0px");
    $(".main .imgBox li").eq(0).siblings().css("z-index", "25").css("left", wd+"px");
    var intv=setInterval(function(){
        if(n<cnt-1) {
            n=n+1;
            nAni(n);
        } else {
            n=0;
            nAni(n);
        }
    }, 5000);
    
    function nAni(i){
        $(".main .imgBox li").eq(i).siblings().css("z-index", "25");
        $(".main .imgBox li").eq(i).css("z-index", "30").not(":animated").animate({"left" : "0px"}, 800, function(){
            $(".main .imgBox li").eq(i).siblings().css("left", wd+"px");
        });
        $(".main .btnBox a").eq(i).siblings().removeClass("on");
        $(".main .btnBox a").eq(i).addClass("on");
    }
    $(".btnBox a").click(function(){
        clearInterval(intv);
        n=parseInt($(this).attr("data-val"));
        $(".btnBox a").removeClass("on");
        $(this).addClass("on");
        nAni(n);
        intv=setInterval(function(){
            if(n<cnt-1) {
                n=n+1;
                nAni(n);
            } else {
                n=0;
                nAni(n);
            }
        }, 5000);
    });
    var sw=true;
    $(".btnBox .btn-stop").click(function(){
        if(sw==true){
            clearInterval(intv);
        } else {
            intv=setInterval(function(){
                if(n<cnt-1) {
                    n=n+1;
                    nAni(n);
                } else {
                    n=0;
                    nAni(n);
                }
            }, 5000);
        }
        sw= !sw;
        $(this).toggleClass("on");
    });
})
*/