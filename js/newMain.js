/**
 * Created by zhangqi on 2016/12/6 0006.
 */
$(window).bind('scroll',function(){
    var h = document.documentElement.scrollTop + document.body.scrollTop;
    if(h>=400){
        $('.top').css("display","block");
    }else{
        $('.top').css("display","none")
    }
})
function gotop(){

    $('body,html').animate({scrollTop: 0},500);

    return false;
}


$(function(){
	$(".contact").mouseenter(function(){
    $(".con_phone").stop().animate({"left":"0px"},500);
})
$(".contact").mouseleave(function(){
    $(".con_phone").stop().animate({"left":"270px"},500);
})
    $(".nav ul li a").mouseenter(function(){
        $(".nav_son").show();
    });
    $(".nav ul").mouseleave(function(){
        $(".nav_son").hide();
    });
    $(".guide a i").click(function(){
        if($(this).hasClass("arrow_s")){
            $(this).removeClass("arrow_s").addClass("arrow_h");
            $(".guide_list").hide();
        }else{
            $(this).removeClass("arrow_h").addClass("arrow_s");
            $(".guide_list").show();
        }
    });
    $(".raiders a i").click(function(){
        if($(this).hasClass("arrow_s")){
            $(this).removeClass("arrow_s").addClass("arrow_h");
            $(".raiders_list").hide();
        }else{
            $(this).removeClass("arrow_h").addClass("arrow_s");
            $(".raiders_list").show();
        }
    });
})