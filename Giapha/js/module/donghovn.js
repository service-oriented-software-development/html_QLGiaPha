$(document).ready(function () {
    DongHoVN();
});
/* giapha */
function DongHoVN() {
    GPVN.System.API.DongHoVN.GetActived(function (res) {
        if (res.value) {
            var result = JSON.parse(res.value);
            var transform = { tag: 'div', onclick: 'filterByAlphaB(${Name})', html: '${Name}', id: 'p${ParentageID}' };
            $('#alphab').json2html(result.ByAlphaBet, transform);

            var dhvn_transf = { tag: 'a', href: 'default.aspx?cp=gia-pha-viet-nam&id=${ParentageID}', html: '${Name} (${FamilyCount})' };
            $('#dhvn').json2html(result.ByTopFirst, dhvn_transf);

            var dhngp_transf = { tag: 'a', href: 'default.aspx?cp=gia-pha-viet-nam&id=${ParentageID}', html: '${Name} (${FamilyCount})' };
            $('#dhngp').json2html(result.ByFamilyCount, dhngp_transf);

        }
    });
}
