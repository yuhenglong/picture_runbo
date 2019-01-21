/**
 * Created by henglong on 2018/8/26.
 */
$(function(){
    //$("#index").click(function(){
    //    $("html,body").stop().animate({scrollTop:$($(this).attr("href")).offset().top -50 + "px"},600);
    //    return false;
    //})
    //$("#intr").click(clickScro);
    //$("#serc").click(clickScro);
    //$("#adv").click(clickScro);
    //function clickScro(){
    //    $("html,body").stop().animate({scrollTop:$($(this).attr("href")).offset().top},600);
    //    return false;
    //}
    $(".nav li").click(function(){
        var index = $(this).index();
        var scrollT = $(".contain").children("div").eq(index).offset().top;
        $("html,body").animate({"scrollTop":scrollT},500);
        $(this).addClass("current").siblings().removeClass("current");
    });
})
