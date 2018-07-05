$(document).ready(function () {

    var showSkill = false;

    /*#works點擊特效*/

    $('.jq_btn_works').click(function (e) { 
        e.preventDefault();
        $(this).parent().find('.jq_flipInY').removeClass('animated flipOutY');
        $(this).parent().find('.jq_flipInY').addClass('animated flipInY');
        $(this).parent().find('.jq_flipInY').css('display', 'block');
        /*去除主體卷軸*/
        $('body').css('overflow', 'hidden');
    });

    $('.jq_close_works').click(function (e) { 
        e.preventDefault();
        $(this).parent().removeClass('animated flipInY');
        $(this).parent().addClass('animated flipOutY');
        $(this).parent().delay(3000, 'hide').css('display', 'none');
        $('body').css('overflow', 'auto');
    });

});