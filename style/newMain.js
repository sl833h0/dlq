/**
 * Created by zhangqi on 2016/12/6 0006.
 */
$(window).bind('scroll',function(){
    var h = document.documentElement.scrollTop + document.body.scrollTop;
    if(h>=400){
        $('#top').css("display","block");
    }else{
        $('#top').css("display","none")
    }
})
$("#top").click(function() {

    $('body,html,').animate({scrollTop: 0},500);

    return false;
});
$(function(){
    $(".nav ul li a").mouseenter(function(){
        $(".nav_son").show();
    });
    $(".nav ul").mouseleave(function(){
        $(".nav_son").hide();
    });
    $(".guide a").click(function(){
        if($(".guide a i").hasClass("arrow_s")){
            $(".guide a i").removeClass("arrow_s").addClass("arrow_h");
            $(".guide_list").hide();
        }else if($(".guide a i").hasClass("arrow_h")){
            $(".guide a i").removeClass("arrow_h").addClass("arrow_s");
            $(".guide_list").show();
            $(".raiders_list").hide();
            $(".raiders a i").removeClass("arrow_s").addClass("arrow_h");
            $(".introduction_list").hide();
            $(".introduction a i").removeClass("arrow_s").addClass("arrow_h");
        }
    });
    $(".raiders a").click(function(){
        if($(".raiders a i").hasClass("arrow_s")){
            $(".raiders a i").removeClass("arrow_s").addClass("arrow_h");
            $(".raiders_list").hide();
        }else if($(".raiders a i").hasClass("arrow_h")){
            $(".raiders a i").removeClass("arrow_h").addClass("arrow_s");
            $(".raiders_list").show();
            $(".guide_list").hide();
            $(".guide a i").removeClass("arrow_s").addClass("arrow_h");
            $(".introduction_list").hide();
            $(".introduction a i").removeClass("arrow_s").addClass("arrow_h");
        }
    });
    $(".introduction a").click(function(){
        if($(".introduction a i").hasClass("arrow_s")){
            $(".introduction a i").removeClass("arrow_s").addClass("arrow_h");
            $(".introduction_list").hide();
        }else if($(".introduction a i").hasClass("arrow_h")){
            $(".introduction a i").removeClass("arrow_h").addClass("arrow_s");
            $(".introduction_list").show();
            $(".guide_list").hide();
            $(".guide a i").removeClass("arrow_s").addClass("arrow_h");
            $(".raiders_list").hide();
            $(".raiders a i").removeClass("arrow_s").addClass("arrow_h");
        }
    });
})