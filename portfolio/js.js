$(document).ready(function(){
    var menu=document.querySelector(".btnFrame .btn-inner"),
        container=document.querySelector("#Wrap");
    
    menu.addEventListener("click", function(){
        this.classList.toggle("open");
        container.classList.toggle("active");
    });
});


$(document).ready(function(){
    $(".tab_content").hide();
    $(".tab_content:first").show();
    
    $("ul.tabs li").click(function(){
        $("ul.tabs li").removeClass("active").css("color", "#333");
        
        $(this).addClass("active").css("color", "darkred");
        $(".tab_content").hide();
        var activeTab=$(this).attr("rel");
        $("#" + activeTab).fadeIn();
    });
});
