/**
 * Created by zhangqi on 2016/12/2 0002.
 */
$(function(){
    var oFocus=$('#focus'),
        oRight=oFocus.find('.right'),
        oLeft=oFocus.find('.left'),
        aRLi=oRight.find('li'),
        aLLi=oLeft.find('li'),
        index=0,
        timer = null;
    aRLi.mouseenter(function(){
        aRLi.removeClass("active");
        aRLi.find('i').removeClass("active");
        index=$(this).index()
        aLLi.eq(index).stop().addClass("on").animate({'opacity':1},500).siblings().stop().removeClass("on").animate({'opacity':0},500);
        stopFoucs();
    }).mouseleave(function(){
        aRLi.eq(index).addClass("active");
        timer = setInterval(function(){
            startFocus();
        },3000);
    });
    oLeft.mouseenter(function(){

        stopFoucs();
    }).mouseleave(function(){
        timer = setInterval(function(){
            startFocus();
        },3000);
    });
    timer = setInterval(function(){
        startFocus();
    },3000);
    function startFocus(){
        index++;
        index = index > aRLi.size()-1 ? 0 :index;
        aRLi.removeClass("active");
        aRLi.find('i').removeClass("active");
        aRLi.eq(index).addClass("active");
        aRLi.eq(index).find('i').addClass("active");
        aLLi.eq(index).stop().addClass("on").animate({'opacity':1},500).siblings().stop().removeClass("on").animate({'opacity':0},500);
    }
    function stopFoucs(){
        clearInterval(timer);
    }
});
$(function(){
    var d=new Date();
    $(".cal_list ul li").eq(d.getDay()).addClass("active");
    $(".cal_list ul li").mouseenter(function(){
        $(".cal_list ul li").removeClass("active");
        $(this).addClass("active");
        var index=$(this).prevAll().length;
        $(".mc").hide();
        $(".mc").eq(index).show();
    });
    $(".new_tit ul li a").mouseenter(function(){
        $(".new_tit ul li a").removeClass("active");
        $(this).addClass("active");
        var index=$(this).parent().prevAll().length;
		var href=$(".new_tit ul li:nth-child("+(index+1)+") a").attr("href");
        $(".more a").attr("href",href);
        $(".nc").hide();
        $(".nc").eq(index).show();
    });
    $(".occ_tit ul li").click(function(){
        var index=$(this).prevAll().length;
        console.log(index);
        $(".occ_tit ul li").removeClass("active");
        $(this).addClass("active");
        $(".occ").fadeOut();
        $(".occ").eq(index).fadeIn();
    });
    $(".com_list ul li").click(function(){
        var index=$(this).prevAll().length;
        $(".com_list ul li").removeClass("active");
        $(this).addClass("active");
        $(".com_con").hide();
        $(".com_con").eq(index).show();
    });
})
$(function() {
    var speed = 40
    marquePic2.innerHTML = marquePic1.innerHTML
    function Marquee() {
        if (demo.scrollLeft >= marquePic1.scrollWidth) {
            demo.scrollLeft = 0
        } else {
            demo.scrollLeft++
        }
    }

    var MyMar = setInterval(Marquee, speed)
    demo.onmouseover = function () {
        clearInterval(MyMar)
    }
    demo.onmouseout = function () {
        MyMar = setInterval(Marquee, speed)
    }
});
