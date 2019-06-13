$(document).ready(function () {
    //ChangeLeftRightBanner();
    //$(".intro_content").mCustomScrollbar({
    //    scrollButtons: { enable: true },
    //    theme: "light-thick",
    //    scrollbarPosition: "outside"
    //});

    switch(getQueryStringValue('lang'))
    {
        case 'en-US':
            $(".header a.lang_eng").addClass('active');
            break;
        default:
            $(".header a.lang_khmer").addClass('active');
            break;
    }

    switch (getQueryStringValue('cp')) {
        case 'apps':
            $(".navMain a").removeClass('active');
            $(".navMain a#apps").addClass('active');
            break;
        case 'topic':
        case 'news-detail':
            $(".navMain a").removeClass('active');
            $(".navMain a#newsevents").addClass('active');
            break;
        default:
            break;
    }

    $(".header a.lang_eng").click(function () {
        window.location = SetPagerUrl('lang', 'en-US');
    });
    $(".header a.lang_khmer").click(function () {
        window.location = SetPagerUrl('lang', 'km-KH');
    });
});

function SetPagerUrl(paramKey, value) {
    var queryParameters = {}, queryString = location.search.substring(1),
    re = /([^&=]+)=([^&]*)/g, m;
    while (m = re.exec(queryString)) {
        queryParameters[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }
    queryParameters[paramKey] = value;
    return window.location.toString().replace(location.search, "") + "?" + $.param(queryParameters);
}
function getQueryStringValue(paramKey)
{
    var queryParameters = {}, queryString = location.search.substring(1),
    re = /([^&=]+)=([^&]*)/g, m;
    while (m = re.exec(queryString)) {
        queryParameters[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }
    return queryParameters[paramKey];
}
function ChangeUrlParam(queryString, paramKey, value) { 
    var queryParameters = {}, //queryString = location.search.substring(1),
    re = /([^&=]+)=([^&]*)/g, m;
 
    // Creates a map with the query string parameters
    while (m = re.exec(queryString)) {
        queryParameters[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }
    
    // Add new parameters or update existing ones
    //queryParameters['newParameter'] = 'new parameter';
    queryParameters[paramKey] = value;
 
    /*
        * Replace the query portion of the URL.
        * Query.param() -> create a serialized representation of an array or
        *     object, suitable for use in a URL query string or Ajax request.
        */
    return $.param(queryParameters).replace("%3F", "?");
    //return window.location.toString().replace(location.search, "") + "?" + $.param(queryParameters);
}
function genCaptcha(ctrlId) {
    System.Security.Captcha.GetImgUrl(function (res) {
        if (res.value) {
            $(ctrlId).attr('src', res.value)
        }
    });
}
String.format = function () {
    var s = arguments[0];
    for (var i = 0; i < arguments.length - 1; i++) {
        var reg = new RegExp("\\{" + i + "\\}", "gm");
        s = s.replace(reg, arguments[i + 1]);
    }
    return s;
}