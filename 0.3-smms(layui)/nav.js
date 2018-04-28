// if (localStorage.getItem("hover-toggle") == "true") {
//     document.querySelector(".nav-hover").classList.add("nav-mini-hover");
//     // $(".nav-hover").addClass("nav-mini-hover");
// }

$(function(){
    //获取模式的存储 ---此判断必须放在其他方法前面。
    if (window.localStorage.getItem("hover-toggle") == "true") {
        $(".nav-hover").addClass("nav-mini-hover");
    }


    // nav收缩展开
    $('.nav-item>a').on('click',function(){
        // if (!$('.nav-hover').hasClass('nav-mini-hover')) {
            if ($(this).next().css('display') == "none") {
                //展开未展开
                $('.nav-item').children('ul').slideUp(300);
                $(this).next('ul').slideDown(300);
                $(this).parent('li').addClass('nav-show').siblings('li').removeClass('nav-show');
            }else{
                //收缩已展开
                $(this).next('ul').slideUp(300);
                $('.nav-item.nav-show').removeClass('nav-show');
            }
        // }
    });


    //二级展开
    $('.children-one>a').on('click',function(){
        console.log(this);
        // if (!$('.nav-hover').hasClass('nav-mini-hover')) {
            console.log($(this).parent('li').children());
            if ($(this).next().css('display') == "none") {
                console.log("展开");
                //展开未展开
                console.log($(this).parent('li'));
                $('.children-one').children('ul').slideUp(300);
                $(this).next('ul').slideDown(300);
                $(this).parent('li').addClass('nav-show').siblings('li').removeClass('nav-show');
            }else if ($(this).parent('li').children().length == 1){
                console.log("没有三级");
                $(this).parent('li').addClass('nav-show').siblings('li').removeClass('nav-show');
            }else{
                console.log("收缩");
                //收缩已展开
                $(this).next('ul').slideUp(300);
                $('.children-one.nav-show').removeClass('nav-show');
            }
        // }
    });

    //三级active
    $('.children-two>a').on('click',function(){
        console.log(this);
        // if (!$('.nav-hover').hasClass('nav-mini-hover')) {
            $(this).parent('li').addClass('nav-show').siblings('li').removeClass('nav-show');
        // }
    });

    $(".nav-hover a").on('click',function () {
        $(".nav-hover a").removeClass('nav-this');
        $(this).addClass('nav-this');
    });

    //nav-mini切换
    $('.mini').on('click',function(){
        if (!$('.nav').hasClass('nav-mini')) {
            $('.nav-item.nav-show').removeClass('nav-show');
            $('.nav-item').children('ul').removeAttr('style');
            $('.nav').addClass('nav-mini');
            $('.nav-hover').addClass('nav-mini');
            // $('.nav-header ul').animate({opacity:'0'}).hide();
            $(".hover-toggle").hide();
            $('.nav-header').addClass('nav-mini');
        }else{
            $('.nav').removeClass('nav-mini');
            $('.nav-hover').removeClass('nav-mini');
            // $('.nav-header ul').animate({opacity:'1'}).show();
            $(".hover-toggle").show();
            $('.nav-header').removeClass('nav-mini');
        }
    });

    //头部导航点击
    $(".nav-header-item").on("click",function () {
        console.log("aaaa");
        console.log($(this).attr("data-nav"));
        var navData = $(this).attr("data-nav");
        $(".nav").addClass("nav-hide")
        $(navData).removeClass("nav-hide");
        $(".nav-header-item").removeClass("nav-header-avtive");
        $(this).addClass("nav-header-avtive");

    })

    // 监听超出范围的侧边导航
    var Items = $(".nav-item");
    for (var i=0;i<Items.length;i++) {
        // console.log($(Items[i]).offset().top);
        if ($(Items[i]).offset().top > 850) {
            $(Items[i]).children('.children-ul').addClass('nav-buttom');
        }
    }


});