$(document).ready(function () {

    GiaPhaMoi();

});
/* Giaphamoi */
function GiaPhaMoi() {
    GPVN.System.API.CayGiaPha.GetTopLatest(function (res) {
        if (res.value) {
            var result = JSON.parse(res.value);
            var transform = { tag: 'li', children: [{ tag: 'a', target: '_blank', href: 'default.aspx?cp=dongho&id=${ID}', html: '${Name}' }] };
            $('#newtree').json2html(result, transform);
        }
    });
}
