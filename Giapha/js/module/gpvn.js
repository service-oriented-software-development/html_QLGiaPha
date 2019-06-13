var page_size = 20;

$(document).ready(function () {
    GPVN(1);
    $("#gpvn_search_btn").click(function () {
        GPVN(1);
    });
    $('input[name="Keyword"]').keypress(function (e) {
        if (e.which == '13') {
            e.preventDefault();
            GPVN(1);
        }
    });
});

/* giapha */
function GPVN(page_index) {
    var prt = getParameterByName('id');
    if (!prt.length) prt = 0;
    var keyword = $('input[name="Keyword"]').val();
    
    $('#gpvn tbody').html('<img class="dhct_loading" src="/img/utils/content_loadding.gif" />');
    GPVN.System.API.CayGiaPha.TimKiem(page_size, page_index, prt, keyword, function (res) {
        if (res.value) {
            var result = JSON.parse(res.value);

            var transform = { tag: 'tr', children: [{ tag: 'td', html: '${STT}' }, { tag: 'td', html: '<a href="default.aspx?cp=dongho&id=${ID}">${Name}</a>' }, { tag: 'td', html: '${Address}' }, { tag: 'td', html: '${CreatedDate}' }, { tag: 'td', html: '${MemberCount}' }] };
            if (result.Total > 0)
            {
                $('#gpvn tbody').html('');
                $('#gpvn tbody').json2html(result.Data, transform);
                $('#pager').smartpaginator({ totalrecords: result.Total, recordsperpage: page_size, initval: page_index, next: 'Next', prev: 'Prev', first: 'First', last: 'Last', theme: 'black', onchange: onChange });
            }
            else $('#gpvn tbody').html('<tr><td colspan="5" style="text-align:center;padding:30px 0;font-size:16px">Không tìm thấy dữ liệu</td></tr>');
        }
        else {
            $('#gpvn tbody').html('<tr><td colspan="5" style="text-align:center;padding:30px 0;font-size:16px">Không tìm thấy dữ liệu</td></tr>');
        }
    });
}
function onChange(newPageValue) {
    GPVN(newPageValue);
}
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
		results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
