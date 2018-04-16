$(function(){
    // nav收缩展开
    $('.nav-item>a').on('click',function(){
        if (!$('.nav').hasClass('nav-mini')) {
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
        }
    });


    //二级展开
    $('.children-one>a').on('click',function(){
        console.log(this);
        if (!$('.nav').hasClass('nav-mini')) {
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
        }
    });

    //三级active
    $('.children-two>a').on('click',function(){
        console.log(this);
        if (!$('.nav').hasClass('nav-mini')) {
            $(this).parent('li').addClass('nav-show').siblings('li').removeClass('nav-show');
        }
    });



    //nav-mini切换
    $('#mini').on('click',function(){
        if (!$('.nav').hasClass('nav-mini')) {
            $('.nav-item.nav-show').removeClass('nav-show');
            $('.nav-item').children('ul').removeAttr('style');
            $('.nav').addClass('nav-mini');
        }else{
            $('.nav').removeClass('nav-mini');
        }
    });
});