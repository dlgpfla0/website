$(document).ready(function(){
    cookiedata=document.cookie;
    if (cookiedata.indexOf("maindiv=done") < 0){
        document.all['divpop'].style.visibility = "visible";
    }
    else {
        document.all['divpop'].style.visibility = "hidden";
    }
    
    function setCookie( name, value, expiredays) {
        var todayDate = new Date();
        todayDate.setDate( todayDate.getDate() + expiredays);
        document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
    }
    function closeWin() {
        if (document.notice_form.ckBox.checked) {
            setCookie( "maindiv", "done", 1 );
        }
        document.all['divpop'].style.visibility = "hidden";
    }
});