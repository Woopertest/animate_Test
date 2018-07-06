$(document).ready(function () {

    var showSkill = false;

    /*#works點擊特效*/

    $('.jq_btn_works').click(function (e) { 
        e.preventDefault();
        $(this).parent().find('.jq_flipInY').removeClass('animated flipOutY');
        $(this).parent().find('.jq_flipInY').addClass('animated flipInY');
        $(this).parent().find('.jq_flipInY').css('display', 'block');
        /*去除主體卷軸*/
        $("body").addClass('lock-position');
    });

    $('.jq_close_works').click(function (e) { 
        e.preventDefault();
        $(this).parent().removeClass('animated flipInY');
        $(this).parent().addClass('animated flipOutY');
        $("body").removeClass('lock-position');
    });

});