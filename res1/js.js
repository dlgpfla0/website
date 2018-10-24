$(document).ready(function(){
    var ht=$(".vs .imgFrame img").height();
    $(".vs, .vs .imgFrame").height(ht);
    
    var wd=parseInt($(".vs").width());
    var cnt=$(".vs .imgFrame li").length;
    var n=0;
    $(".vs .imgFrame li").eq(0).css("z-index", "30")
})