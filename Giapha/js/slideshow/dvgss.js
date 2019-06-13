function slideSwitch() {
    var $active = $('#dvgss a.active');

    if ($active.length == 0) $active = $('#dvgss a:last');

    var $next = $active.next().length ? $active.next()
        : $('#dvgss a:first');

    $active.addClass('last-active');

    $next.css({ opacity: 0.0 })
        .addClass('active')
        .animate({ opacity: 1.0 }, 1000, function () {
            $active.removeClass('active last-active');
        });
}
$(document).ready(function () {
    $(function () {
        setInterval("slideSwitch()", 5000);
    });
});
