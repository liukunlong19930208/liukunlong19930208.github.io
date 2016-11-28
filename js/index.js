$(function(){
/*****************************************/
    $(".btn").click(function(){
        $(".d-left").css("width",0);
        $(".d-right").css("width",0);
        $(".btn").css("opacity",0);
        $(".conText").css("display","none");
        $(".topnav").css("opacity",1);
        $(".container").css("display","block");
        $(".nav li").click(function(){
            $(".nav li").removeClass("nav-style").eq(this).addClass("nav-style");
        });
        $(".photo1").hover(function(){$("#photo1").css("display","block")},function(){$("#photo1").css("display","none")});
        $(".small-photo1").hover(function(){$(".small-xinxi1").css("display","block")},function(){$(".small-xinxi1").css("display","none")});
        $(".photo2").hover(function(){$("#photo2").css("display","block")},function(){$("#photo2").css("display","none")});
        $(".small-photo2").hover(function(){$(".small-xinxi2").css("display","block")},function(){$(".small-xinxi2").css("display","none")});
        $(".photo3").hover(function(){$("#photo3").css("display","block")},function(){$("#photo3").css("display","none")});
        $(".small-photo3").hover(function(){$(".small-xinxi3").css("display","block")},function(){$(".small-xinxi3").css("display","none")})
        //鼠标跟随
        var H = 0;
        $('.button').bind('mousedown touchstart',function(e) {
            $('.clicked').removeClass('clicked');
            $(this).addClass('clicked');
        });
        $(document).bind('mousemove touchmove',function(e) {
            e.preventDefault();
            var drawSize = 55;
            var drawType = $('.clicked').html();
            var floatTypes = Array('floatOne','floatTwo','floatThree','floatFour','floatFive');
            var floatType = floatTypes[Math.floor(Math.random()*floatTypes.length)];
            var xPos = e.originalEvent.pageX;
            var yPos = e.originalEvent.pageY;
            $('body').append('<div class="draw" style="font-size:'+drawSize+'px;left:'+(xPos+50)+'px;top:'+(yPos+50)+'px;-webkit-animation:'+floatType+' .9s 1;-moz-animation:'+floatType+' .9s 1;color:hsla('+H+',100%,70%,1)">'+drawType+'</div>');
            $('.draw').each(function() {
                var div = $(this);
                setTimeout(function() {$(div).remove();},800);
            });
        });

        setInterval(function() {
            if(H<=360) {H++;}
            else {H=0;}
        },10);
        //内容开始
        $("#fullpage").css("transition","all 2s ease 2s").css("opacity",1).fullpage({
            'verticalCentered': true,
            'css3': true,
            'menu':true,
            anchors: ['page1', 'page2', 'page3', 'page4','page5','page6','page7'],
            'navigation': true,
            'navigationPosition': 'right',
            'navigationTooltips': ['基本资料', '专业技能', '项目整站','H5游戏','Angular.js','PhotoShop','自我总结'],
             afterLoad: function(anchorLink, index){
                 $(".nav li").eq(index-1).addClass("nav-style");
                 if(index==1){
                     $(".jiao").css("transform","rotate(180deg)");
                     $(".qianduan").css("transform","scale(1,1) rotate(720deg)");
                     $(".photo1").css({"left":"25%","opacity":1});$(".photo2").css("transform","scale(1,1)");$(".photo3").css({"right":"25%","opacity":1});
                     $(".span").css("opacity",1)
                 }else if(index==2){
                     $(".page2-bigimg").css({"transform":"translateY(0)","opacity":0.7});
                     $(".page2-smallimg").css({"transform":"scale(1,1)","opacity":0.9});
                     $(".left-img").css({"transform":"translateY(0) rotate(-90deg)","opacity":1})
                     $(".page2-span1").css({"transform":"translate(0,0)","opacity":1})
                     $(".page2-span2").css({"transform":"scale(1,1) rotate(360deg)","opacity":1})
                 }else if(index==3){
                     $(".page3-left").css({"opacity":1,"transform":"translate(0,0)"});
                     $(".page3-right").css({"opacity":1,"transform":"scale(1,1) rotate(360deg)"})
                     $(".page3-hide").css("transform","scale(1,1)")
                 }else if(index==4){
                     $(".page4-left").css({"opacity":1,"transform":"translate(0,0)"});
                     $(".page4-right").css({"opacity":1,"transform":"scale(1,1) rotate(360deg)"})
                     $(".page4-hide").css("transform","scale(1,1)")
                 }else if(index==5){
                     $(".page5-left").css({"opacity":1,"transform":"translate(0,0)"});
                     $(".page5-right").css({"opacity":1,"transform":"scale(1,1) rotate(360deg)"})
                     $(".page5-hide").css("transform","scale(1,1)")
                 }else if(index==6){
                     $(".page6-left h1").css({"transform": "translate(0px,0px)","opacity": 1});
                     $(".page6span").css({"transform": "scale(1,1) rotate(360deg)","opacity": 1});
                     $(".psbox").css({"transform": "translate(0px,0px) scale(1,1)","opacity": 1})
                 }else if(index==7){
                     $(".page7-top").css("height","30%")
                     $(".page7-bot").css("height","30%")
                 }

             },
             onLeave: function(index, nextIndex, direction){
                 $(".nav li").eq(index-1).removeClass("nav-style");
                 if(index==1){
                     $(".jiao").css("transform","rotate(0deg)");
                     $(".qianduan").css("transform","scale(0,0) rotate(0deg)");
                     $(".photo1").css({"left":0,"opacity":0});$(".photo2").css("transform","scale(0,0)");$(".photo3").css({"right":0,"opacity":0});
                     $(".span").css("opacity",0)
                 }else if(index==2){
                     $(".page2-bigimg").css({"transform":"translateY(-200px)","opacity":0})
                     $(".page2-smallimg").css({"transform":"scale(0,0)","opacity":0})
                     $(".left-img").css({"transform":"translateY(-200px) rotate(0deg)","opacity":0})
                     $(".page2-span1").css({"transform":"translate(100px,100px)","opacity":0})
                     $(".page2-span2").css({"transform":"scale(0,0) rotate(0deg)","opacity":0})
                 }else if(index==3){
                     $(".page3-left").css({"opacity":0,"transform":"translate(-50px,-100px)"});
                     $(".page3-right").css({"opacity":0,"transform":"scale(0,0) rotate(0deg)"})
                     $(".page3-hide").css("transform","scale(0,0)")
                 }else if(index==4){
                     $(".page4-left").css({"opacity":0,"transform":"translate(-50px,-100px)"});
                     $(".page4-right").css({"opacity":0,"transform":"scale(0,0) rotate(0deg)"})
                     $(".page4-hide").css("transform","scale(0,0)")
                 }else if(index==5){
                     $(".page5-left").css({"opacity":0,"transform":"translate(-50px,-100px)"});
                     $(".page5-right").css({"opacity":0,"transform":"scale(0,0) rotate(0deg)"})
                     $(".page5-hide").css("transform","scale(0,0)")
                 }else if(index==6){
                     $(".page6-left h1").css({"transform": "translate(50px,50px)","opacity": 0});
                     $(".page6span").css({"transform": "scale(0,0) rotate(0deg)","opacity": 0});
                     $(".psbox").css({"transform": "translate(50px,50px) scale(0,0)","opacity": 0})
                 }else if(index==7){
                     $(".page7-top").css("height","50%")
                     $(".page7-bot").css("height","50%")
                 }

             }
        });
    });
/***************************************************/
//文字
    $(".word1").lbyl({
        content: "这是一个神奇的高逼格的前端攻城狮的故事，他可以攻城略地，冲锋陷阵；亦可决策于千里之外，稳如磐石，安若泰山！",
        speed: 100,
        type: 'show',
        finished: function(){
            $('.word2').lbyl({
                content:"我想你一定会有兴趣去了解这样一个人，别再犹豫，点击下面的按钮，你会发现他别样的风采！",
                speed: 150,
                type: 'fade',
                fadeSpeed: 500
            })
        } // Finished Callback
    });
/*********************************/
//导航
    var divFlag=true;
    $(".divbox").click(function(){
        if(divFlag){
            $(".top-div").css("transform","translateY(6px) rotate(-315deg)");
            $(".mid-div").css("opacity",0);
            $(".bot-div").css("transform","translateY(-6px) rotate(315deg)");
            $(".ulbox").css("height",280);
            $(".ulbox li").css("opacity",1);
            divFlag=false
        }else{
            $(".top-div").css("transform","translateY(0px) rotate(0deg)");
            $(".mid-div").css("opacity",1);
            $(".bot-div").css("transform","translateY(0px) rotate(0deg)");
            $(".ulbox").css("height",0);
            $(".ulbox li").css("opacity",0);
            divFlag=true
        }
    });
/***********************************/
    //page小屏轮播
    var smallNum=0;
    var smallT=setInterval(function(){
        smallNum++;
        if(smallNum>=$(".small-photo").length){
            smallNum=0
        };
        $(".small-photo").css("right","-150%").eq(smallNum).css("right",0)
    },3000);
    $("#page1-small").hover(function(){
        clearInterval(smallT)
    },function(){
        smallT=setInterval(function(){
            smallNum++;
            if(smallNum>=$(".small-photo").length){
                smallNum=0
            };
            $(".small-photo").css("right","-150%").eq(smallNum).css("right",0)
        },3000);
    });
    //page3
    var page3num=0;
    function lun () {
        page3num++;
        if(page3num>=4){
            page3num=0
        }
        $(".wwwbox").css("opacity",0).eq(page3num).animate({opacity:1}).finish();
        $(".banner-right li").css({"width":"100%","margin":"none"}).eq(page3num).css({"width":"120%","margin-left":"-10%"})
    }
    var page3t=setInterval(lun,3000);
    $(".bannerbox").hover(function(){
        clearInterval(page3t)
    },function(){
        page3t=setInterval(lun,3000);
    });
    $(".banner-right li").click(function(){
       var index=$(".banner-right li").index(this);
        $(".banner-right li").css({"width":"100%","margin":"none"}).eq(index).css({"width":"120%","margin-left":"-10%"})
        $(".wwwbox").css("opacity",0).eq(index).animate({opacity:1}).finish()
        index=page3num;
    });
    /***********************************/
    //page4
    $('.jq-box').bind('mouseover',function(){
        var oPosition=$(this).position();
        var oThis=$(this);
        $('.boxBor').queue('fnHide');
        if($(".boxBor").attr('deta-switch')!=='true'){
            $(".boxBor").attr('deta-switch','true');
            $(".boxBor").css({
                width:'100%',
                height:$(window).height(),
                left:'0px',
                top:'0px',
                opacity:0,
                display:'block'
            })
        }
        $(".boxBor").stop(false,false).animate({
            opacity:0.8,
            left:oPosition.left+10,
            top:oPosition.top+10,
            width:oThis.width(),
            height:oThis.height()
        },250)
    });
    //时钟

    var clockBox=$(".clockBox")[0];

    //创建刻度
    function msb (){
        for(var i=0;i<60;i++){
            if(i%5==0){
                var w=4;h=8;
            }else{
                var w=2;h=6;
            }
            var div=document.createElement("div")
            div.style.cssText="width:"+w+"px;height:"+h+"px;background:#111;position:absolute;left:0;top:0;"
            div.style.transform="translate("+(150-w)/2+"px,0) rotate("+i*6+"deg)"
            div.style.transformOrigin="center 75px";//基准点
            clockBox.appendChild(div);
        }
    }
    msb();
    //创建指针
    var time=new Date();
    function msd (w,h,c,a){
        var div=document.createElement("div")
        div.style.cssText="width:"+w+"px;height:"+h+"px;background:"+c+";transform:translate(75px,"+(150-h)/2+"px) rotate("+a+"deg);transform-origin:left center;position:absolute;left:0;top:0;"
        clockBox.appendChild(div);
        return div;
    }
    var h=msd(20,3,"#000",time.getHours()*30-90+(time.getMinutes()*6)/12)
    var m=msd(40,2,"#999999",time.getMinutes()*6-90)
    var s=msd(60,1,"red",time.getSeconds()*6-90)
    setInterval(function(){
        var time=new Date();
        h.style.cssText="width:20px;height:3px;background:#111;transform:translate(75px,"+(150-6)/2+"px) rotate("+(time.getHours()*30-90+(time.getMinutes()*6)/12)+"deg);transform-origin:left center;position:absolute;left:0;top:0;"
        m.style.cssText="width:40px;height:2px;background:#111;transform:translate(75px,"+(150-4)/2+"px) rotate("+(time.getMinutes()*6-90)+"deg);transform-origin:left center;position:absolute;left:0;top:0;"
        s.style.cssText="width:60px;height:1px;background:red;transform:translate(75px,"+(150-2)/2+"px) rotate("+(time.getSeconds()*6-90)+"deg);transform-origin:left center;position:absolute;left:0;top:0;"
    },1000)
    /************************************/
    //page5
    var page5Now=0;
    var page5Next=0;
    function lunbo(){
        page5Next++;
        if(page5Next>$(".phonetu img").length-1){
            page5Next=0;
        }
        $(".phonetu img").eq(page5Now).stop().animate({left:"-100%"})
        $(".phonetu img").eq(page5Next).css("left","100%");
        $(".phonetu img").eq(page5Next).stop().animate({left:0});
        $(".phonetu ul li").eq(page5Now).attr("id","");
        $(".phonetu ul li").eq(page5Next).attr("id","click");
        page5Now=page5Next
    }
    var page5T=setInterval(lunbo,3000);
    $(".phonetu ul li").click(function(){
        var index=$(".phonetu ul li").index(this);
        page5Next=index;
        $(".phonetu img").eq(page5Now).stop().animate({left:"-100%"})
        $(".phonetu img").eq(page5Next).css("left","100%");
        $(".phonetu img").eq(page5Next).stop().animate({left:0});
        $(".phonetu ul li").eq(page5Now).attr("id","");
        $(".phonetu ul li").eq(page5Next).attr("id","click");
        page5Now=page5Next
    });
    $(".phonetu").hover(function(){
        clearInterval(page5T)
    },function(){
        page5T=setInterval(lunbo,3000);
    });
    /***************************************/
    //page6
    $(".yuan").each(function(index,obj){
        obj.style.transform="translate(-210px,0) rotate("+index*30+"deg)"
        obj.style.transformOrigin="center 250px";//基准点
    });
    $(".yuan").hover(function(){
        var index=$(".yuan").index(this)
        $(".yuanxin").eq(index).css("opacity",1)
    },function(){
        var index=$(".yuan").index(this)
        $(".yuanxin").eq(index).css("opacity",0)
    });
    var audio=$("audio")[0];
    var play=$(".play")[0];
    play.onclick=function(){
       if(audio.paused){
           play.className="pause";
           audio.play()
       }else{
           play.className="play";
           audio.pause()
       }
    };
    /*********************************/

});