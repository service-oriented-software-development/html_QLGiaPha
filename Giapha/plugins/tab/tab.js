$(document).ready(function () {
    $('.tabhead a').click(function () {
        var index = $(this).attr('id').replace('for','');
        $('.tabhead a').removeClass('active');
        $(this).addClass('active');
        $('.ctab').hide();
        $('#tab'+index).show();
    });
});