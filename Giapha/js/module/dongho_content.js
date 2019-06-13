var creator = '';
$(document).ready(function () {
    LoadInfo();
});

function LoadInfo()
{
    $('#dh_menu li').removeClass('active');
    $('#ft_ct').removeClass('nttt');
    $('#dhinfo').addClass('active');
    $('#dhfrmtit').html('THÔNG TIN DÒNG HỌ');
    $('#ft_ct').html('<img class="dhct_loading" src="/img/utils/content_loadding.gif" />');
    GPVN.System.API.CayGiaPha.GetInfoToDisplay(getQueryStringValue('id'), function (res) {
        if (res.value) {
            var result = JSON.parse(res.value);
            if (result == null) {
                $('#ft_ct').html('<h2 style="text-align:center;">Không tìm thấy thông tin dòng họ<h2>');
                return;
            }
            var cre = result.Creator;
            $('#cre_fn').html(cre.FullName);
            $('#cre_phone').html(cre.Phone);
            $('#cre_email').html(cre.Email);
            $('#cre_addr').html(cre.Address); 
            $('#cravatar').attr('src',cre.Image);

            if (result.IsPublic)
            {
                var detail = result.Detail;
                $('#dhname').html('Gia phả dòng họ: ' + detail.Name);
                
                var treelink = detail.MemberCount > 0 ? '  (<a href="default.aspx?cp=phado&id=' + detail.ID + '" class="treelink">Xem Phả đồ tại đây</a>)' : '';
                $('#dhtree').html('<a href="default.aspx?cp=phado&id=' + detail.ID + '">Phả đồ</a>');
                var html = '<p class="dhtitle"><span>Tên dòng họ</span><b>:</b><span>' + detail.Name + '</span></p>';
                html += '<p class="dhtitle"><span>Quê gốc</span><b>:</b><span>' + detail.Address + '</span></p>';
                html += '<p class="dhtitle"><span>Ngày giỗ họ</span><b>:</b><span>' + detail.Anniversary + '</span></p>';
                html += '<p class="dhtitle"><span>Số thành viên</span><b>:</b><span>' + detail.MemberCount + ' ' + treelink + '</span></p>';
                html += '<p class="dhtitle"><span>Ngày lập gia phả</span><b>:</b><span>' + detail.CreatedDate + '</span></p>';
                html += '<p class="dhtitle"><span>Người lâp gia phả</span><b>:</b><span>' + cre.FullName + '</span></p>';
                html += '<h3>LỜI HAY Ý ĐẸP</h3><div class="lhyd">'+detail.Slogan+'</div>';
                html += '<h3>GIỚI THIỆU VỀ DÒNG HỌ</h3><div class="gtdh">' + detail.Description + '</div>';

                $('#ft_ct').html(html);
            }
            else
            {

            }
        }
    });
}

function LoadNews(page_index) {
    $('#dh_menu li').removeClass('active');
    $('#ft_ct').removeClass('nttt');
    $('#dhnews').addClass('active');
    $('#dhfrmtit').html('TIN TỨC DÒNG HỌ');
    $('#ft_ct').html('<img class="dhct_loading" src="/img/utils/content_loadding.gif" />');
    GPVN.System.API.TinTuc.TinDongHo(page_index,getQueryStringValue('id'),  function (res) {
        if (res.value) {
            var result = JSON.parse(res.value);
            if (result.length == 0) $('#ft_ct').html('<p style="text-align:center;padding-top:50px;font-size:16px">Không tìm thấy nội dung</p>');
            var transform = [{ tag: 'div', 'class': 'newsitem', children: [{ tag: 'div', 'class': 'news_hl', html: '<a href="/default.aspx?cp=cttdh&cid=${NewsID}">${Title}</a> - <span>${CreatedDate}</span>' }, { tag: 'div', 'class': 'news_sum', html: '${Summary}' }] }];
            $('#ft_ct').html('');
            $('#ft_ct').json2html(result, transform);
        }
        else
        {
            $('#ft_ct').html('<p style="text-align:center;padding-top:50px;font-size:16px">Không tìm thấy nội dung</p>');
        }
    });
}

function LoadTombs(page_index, kw) {
    if (kw == undefined) kw = '';
    $('#dh_menu li').removeClass('active');
    $('#dhtomb').addClass('active');
    $('#dhfrmtit').html('NGHĨA TRANG DÒNG HỌ');
    $('#ft_ct').html('<img class="dhct_loading" src="/img/utils/content_loadding.gif" />');
    GPVN.System.API.NTTT.NghiaTrangDongHo(page_index, kw, getQueryStringValue('id'), function (res) {
        if (res.value) {
            var result = JSON.parse(res.value);

            if (result.length == 0) $('#ft_ct').html('<p style="text-align:center;padding-top:50px;font-size:16px">Không tìm thấy nội dung</p>');

            $('#ft_ct').addClass('nttt');
            $('#ft_ct').html('<div class="ntdh_head"></div><div class="ntdh_lbd"></div><div style="float:left"><div class="ntdh_search_box"><input type="text" name="Keyword" placeholder="Tên phần mộ" value="' + kw + '" /><a href="#" id="ntdh_search_btn">Tìm kiếm</a></div><ul id="ntdh"></ul></div><div class="ntdh_rbd"></div>');
            var transform = { tag: 'li', 'class':'ntdh', children: [{ tag: 'a', href: '/default.aspx?cp=phan-mo&id=${TombID}', children: [{ tag: 'img', src: '${Image}' }, { tag: 'p', 'class': 'tname', html: '${Name}<span class="byry"> (${BirdYear}-${RIPYear})</span>' }, { tag: 'p', 'class': 'addr', html: '${Address}' }, { tag: 'p', html: 'Mộ số: ${TombID} - Số lượt viếng: ${VisitCount}' }] }] };
            $('#ntdh').json2html(result.Data, transform);
            $('#ntdh_search_btn').click(function () {
                LoadTombs(1, $('input[name="Keyword"]').val());
            });
            $('input[name="Keyword"]').keypress(function (e) {
                if (e.which == '13') {
                    e.preventDefault();
                    LoadTombs(1, $(this).val());
                }
            });
        }
    });
}
