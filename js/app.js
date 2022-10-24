$(document).ready(function(){
    //back to top
    $('.btn-go-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        });
    });
    //collapse: v1
    $('.mi-predict-wraper-header').on('click', function () {
        //
        var _this = $(this);
        var parent = $(this).closest('.mi-predict-wraper');
        var child = $(parent).find('.mi-predict-wraper-content');
        if($(parent).hasClass('open')){
            $(parent).removeClass('open');
            $(_this).find('.mi-arrow').removeClass('mi-arrow-up').addClass('mi-arrow-down');
            $(child).removeClass('active');
        }else{
            $(parent).addClass('open');
            $(_this).find('.mi-arrow').removeClass('mi-arrow-down').addClass('mi-arrow-up');
            $(child).addClass('active');
        }
    });
    //collapse: v2
    $('.mi-predict-parent').on('click', function () {
        //
        var _this = $(this);
        var cat = $(_this).data('cat');
        if($('.mi-predict-parent-'+cat+'').hasClass('active')){
            $(_this).find('.mi-arrow').removeClass('mi-arrow-up').addClass('mi-arrow-down');
            $('.mi-predict-parent-'+cat+'').removeClass('active');
        }else{
            $(_this).find('.mi-arrow').removeClass('mi-arrow-down').addClass('mi-arrow-up');
            $('.mi-predict-parent-'+cat+'').addClass('active');
        }
    });
    //open/close chat box 
    $('.mi-chat-box-close').click(function () {
        var _this = $(this);
        if($(_this).hasClass('open')){
            $(_this).removeClass('open');
            $(_this).addClass('closed');
            $(_this).find('.mi-arrow').removeClass('mi-arrow-up').addClass('mi-arrow-down');
            $('.mi-chat-box-content').hide();
        }else{
            $(_this).addClass('open');
            $(_this).removeClass('closed');
            $(_this).find('.mi-arrow').removeClass('mi-arrow-down').addClass('mi-arrow-up');
            $('.mi-chat-box-content').show();
        }
    });
});