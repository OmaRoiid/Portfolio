$(function () {
    'use strict';
    $('.samples ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all') {
            $('.shuffle-images .col-sm').css('opacity', 1)
        }
        else {
            $('.shuffle-images .col-sm').css('opacity', '0.2')
            $($(this).data('class')).css('opacity', 1)
        }

    });
});