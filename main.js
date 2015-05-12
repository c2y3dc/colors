$(document).ready(function(){
    $(".s").click(function(){
        var color = $(this).css("background-color");
        var r = Math.floor(Math.random()*256);
        var g = Math.floor(Math.random()*256);
        var b = Math.floor(Math.random()*256);
        var now = "rgb("+r+", "+g+", "+b+")";
        $(this).css("background-color", now);
        $(".sContainer span").html("That div was <br><span style='background-color:"+color+";'>"+color+"</span>.<br>"+"<span>and is now:<br></span><span style='background-color:"+now+";'>"+now+"</span>.");
    });
});