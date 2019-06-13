$(document).ready(function () {
    LienKet();
});
/* LienKet */
function LienKet() {
    GPVN.System.API.LienKet.GetToDisplay(function (res) {
        if (res.value) {
            var result = JSON.parse(res.value);
            var transform = { tag: 'li', children: [{ tag: 'a', target: '_blank', href: '${Url}', html: '${Name}' }] };
            $('#weblink').json2html(result, transform);
        }
    });
}
