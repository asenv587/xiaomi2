$(function(){
           
            $(".pic li").eq(0).show();
           
            $("#position li").mouseover(function() {
                $(this).addClass('cur').siblings().removeClass("cur");
                var index = $(this).index();
                i = index;
                   $(".pic li").eq(index).show().siblings().hide();
                $(".pic li").eq(index).fadeIn(500).siblings().fadeOut(500);
            });
            //自动轮播
            var i=0;
            var timer=setInterval(play,2000);
            //向右切换
            var play=function(){
                i++;
                i = i > 3 ? 0 : i ;
                $("#position li").eq(i).addClass('cur').siblings().removeClass("cur");
                $(".pic li").eq(i).fadeIn(500).siblings().fadeOut(500);
            }
            //向左切换
            var playLeft=function(){
                i--;
                i = i < 0 ? 3 : i ;
                $("#position li").eq(i).addClass('cur').siblings().removeClass("cur");
                $(".pic li").eq(i).fadeIn(500).siblings().fadeOut(500);
            }
            //鼠标移入移出效果
            $("#container").hover(function() {
                clearInterval(timer);
            }, function() {
                timer=setInterval(play,2000);
            });
            //左右点击切换
            $("#prev").click(function(){
                playLeft();
            })
            $("#next").click(function(){
                play();
            })
        })