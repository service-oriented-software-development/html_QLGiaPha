$(document).ready(function () {

    ThongKe();
});
/* Thong ke */
function ThongKe() {
    GPVN.System.API.ThongKe.GetToDisplay(function (res) {
        if (res.value) {
            var result = JSON.parse(res.value);
            var transform = { tag: 'tr', children: [{ tag: 'td', children: [{ tag: 'a', target: '_blank', html: '${Name}', href: 'default.aspx?cp=dongho&id=${ID}' }] }, { tag: 'td', html: '${MemberCount}' }] };
            $('#tblft').json2html(result.TopTree, transform);

            var transform1 = { tag: 'tr', children: [{ tag: 'td', html: '${Name}' }, { tag: 'td', html: '${NValue}' }] };
            $('#tblsys').json2html(result.SysStat, transform1);
        }
    });
}
