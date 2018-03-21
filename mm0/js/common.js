var menuFlag = true;
var winwidth = window.innerWidth;
$(function() {
    $('.menu').click(function() {
        if (menuFlag == true) {
            menuFlag = false;
            $('.navWrap').toggleClass('open');
            setTimeout(function() {
                menuFlag = true;
            }, 1200);
        }
    });
    $('.navLevel2 > a').click(function() {
        $(this).parent().find('ul').stop().slideToggle();
    });
    $('.drop-menu span').click(function() {
        $(this).toggleClass('active');        
        $('.drop-menu-links').stop().slideToggle(600);
     //   $('.content').toggleClass('active');
    });
    $(document).click(function(event) {
        if (!$(event.target).closest(".menu, .navWrap nav .navLevel1 ul li a, .navWrap nav .navLevel1 .title").length) {
            menuFlag = true;
            $('.navWrap').removeClass('open');
        }
    });
    $('.callme').click(function(){
        formValidation();
    });

    $('.apply-now .btn').click(function(){
        $('.apply-now').fadeOut(300,function(){
            $('.apply-now-form').fadeIn();
        });
        if($(window).width()<768){
            $('#wrapper').css({
                'height':'inherit'
            });
        }
        if($(window).width()<360){
            $('.svg-animation').css({
                'position':'relative'
            })
        }
        
    });
    /* $('.inner-page .content').mCustomScrollbar(); */
    inputfunc();
    resizeFunc();
    $('.numbersonly').keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl/cmd+A
            (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
             // Allow: Ctrl/cmd+C
            (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
             // Allow: Ctrl/cmd+X
            (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
   
    $('.charactersonly').keydown(function (e) {
        if ((e.keyCode > 64 && e.keyCode < 91) ||  e.keyCode == 8 || e.keyCode == 37 || e.keyCode == 39 || e.keyCode == 46){
            return true;
        }else
            {
                //alert("Please enter only char");
                return false;
            }
    })
});

$(window).resize(function() {
    resizeFunc();
});


function inputfunc(){
    $(document).on('focus','.input-wrapper input',function(){
        $(this).parents('.input-wrapper').addClass('filled');
       

    });
    $(document).on('keydown','.input-wrapper input',function(e){
        if($(this).parents('.input-wrapper').hasClass('errorField')){
            $(this).parents('.input-wrapper').removeClass('errorField');
            $(this).parents('.input-wrapper').find('.error').hide();
        }
        
    })
    $(document).on('blur','.input-wrapper input',function(){
        if($(this).val()==""){
            $(this).parents('.input-wrapper').removeClass('filled');

        }
    });
}

function formValidation(){
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    $('.input-wrapper').each(function(){
        var getVal = $(this).find('input').val();
        if(getVal==''){
            $(this).addClass('errorField');
            $(this).find('.error').text("Please enter "+$(this).find('input').attr('data-error'));
            $(this).find('.error').fadeIn();
        }else if($(this).hasClass('email') && !filter.test(getVal)){
            $(this).addClass('errorField');
            $(this).find('.error').text("Please enter valid "+$(this).find('input').attr('data-error'));
            $(this).find('.error').fadeIn();
        }
        
    });
}



function resizeFunc() {
    if ($(document).width() < 767) {
        $('.navLevel1 .title').unbind().click(function() {
            if ($(this).next().css('display') == 'none') {
                $(this).next().stop().slideDown().parent().siblings().find('ul').stop().slideUp();
            } else {
                $(this).next().stop().slideUp();
            }

        });
    } else {
        $('.navLevel1 .title').unbind().find('ul').removeAttr('style');
    }
  //  winwidth = window.innerWidth
    if ($(window).width() < 980) {
        checktilt();
    }

}


function checktilt() {
    console.log(winwidth, window.innerWidth)
    if (window.innerWidth > winwidth) {
        $('.tiltScreen').show();
    } else {
        $('.tiltScreen').hide();
        if (window.innerWidth == 768) {
            $('.tiltScreen').hide();
        }

    }
}