var mode = 0;//create
var load_tg = 0;
var tmid = 0;
$(document).ready(function () {
    loadOrderInFamily();
    $('a.ucptree_option').click(function (e) {
        var pos = $(this).position();
        $('#tree_guide').css('top', (pos.top + 15) + 'px');
        $('#tree_guide').slideToggle();
    });
    $('h2.optbox_title').click(function (e) {
        $('#tree_guide').slideUp();
    });
    $('#float_panel').click(function (e) {
        $('div.ucp_def_header .banner').slideToggle();
        $('div.ucp_def_left').toggle("slide");
    });
    setTimeout(function () { $('#float_panel').click(); }, 5000);

    $("#btn_changeimg").click(function () {
        $('#dlg_dhlib').modal({ closeExisting: false, escapeClose: true });
        fmOnLoad($('#avatar'), 'src');
    });
    $("#btn_save").click(function () {
        if (mode == 0)
            createNew();
        else 
            update();
    });
    $("#btn_save_his").click(function () {
        $('.frm_loadstatus').show();
        GPVN.System.API.ThanhVien.UpdateHistory(o$("#hdpr").val(), '', CKEDITOR.instances.txtHistory.getData(), function (res) {
            if (res.value) {
                var result = res.value;
                if (result.IsError)
                    $("#frm_msg_his").html(result.Message);
                else {
                    $("#frm_msg_his").html(result.Message);
                }
            }
            $('.frm_loadstatus').hide();
        });
    });
    $("#btn_move").click(function () {
        takerip();
    });
    $("#cboLiveStatus").change(function () {
        var val = this.value;
        showHideRipBox(val);
    });
});

function LoadInfo(id) {
    $('.frm_loadstatus').show();
    GPVN.System.API.ThanhVien.HienThi(id, function (res) {
        if (res.value) {
            var result = res.value;
            if (result.IsError)
            {
                alert(result.Message);
            }
            else
            {
                $('input[name="FullName"]').val(result.Value.FullName);
                $('input[name="PartnerName"]').val(result.Value.PartnerName);
                $('#avatar').attr('src', result.Value.Image);
                $('input[name="BirdDate"]').val(result.Value.BirdDate);
                $('input[name="RipDate"]').val(result.Value.RipDate);
                $('#cboGender').val(result.Value.Gender);
                $('#cboLiveStatus').val(result.Value.LiveStatus);
                $('#cboOrderInFamily').val(result.Value.OrderInTree);
                CKEDITOR.instances.txtHistory.setData(result.History);

                showHideRipBox(result.Value.LiveStatus);
            }
        }
        $('.frm_loadstatus').hide();
    });
}
function LoadTombGroup(callback) {
    if (load_tg == 1) {
        callback();
        return;
    }
    GPVN.System.API.QLNTTT.Ucp_ShowTG_All(function (res) {
        if (res.value) {
            var result = res.value;
            if (result.IsError) {
                alert(result.Message);
            }
            else {
                var jsonObj = JSON.parse(res.value);
                load_tg = 1;
                loadOrderRIP();
                $.each(jsonObj, function () {
                    $("#cboTombGroup").append($("<option></option>").val(this['TombGroupID']).html(this['GroupName']));
                });
            }
            callback();
        }
    });
}

function createNew() {
    $('.frm_loadstatus').show();
    var obj = {
        TreeMemberID: 0,
        ParentID: $("#hdpr").val(),
        FullName: $('input[name="FullName"]').val(),
        PartnerName: $('input[name="PartnerName"]').val(),
        Image: $('#avatar').attr('src'),
        BirdDate: $('input[name="BirdDate"]').val(),
        RipDate: $('input[name="RipDate"]').val(),
        Gender: $('#cboGender').find('option:selected').val(),
        LiveStatus: $('#cboLiveStatus').find('option:selected').val(),
        OrderInTree: $('#cboOrderInFamily').find('option:selected').val()
    };

    obj = JSON.stringify(obj);

    GPVN.System.API.ThanhVien.TaoMoi(obj, '', function (res) {
        if (res.value) {
            var result = res.value;
            if (result.IsError)
                $("#frm_msg").html(result.Message);
            else {
                $("#frm_msg").html(result.Message);
            }
        }
        $('.frm_loadstatus').hide();
    });
}
function update() {
    $('.frm_loadstatus').show();
    var obj = {
        TreeMemberID: $("#hdpr").val(),
        FullName: $('input[name="FullName"]').val(),
        PartnerName: $('input[name="PartnerName"]').val(),
        Image: $('#avatar').attr('src'),
        BirdDate: $('input[name="BirdDate"]').val(),
        RipDate: $('input[name="RipDate"]').val(),
        Gender: $('#cboGender').find('option:selected').val(),
        LiveStatus: $('#cboLiveStatus').find('option:selected').val(),
        OrderInTree: $('#cboOrderInFamily').find('option:selected').val()
    };

    obj = JSON.stringify(obj);

    GPVN.System.API.ThanhVien.CapNhat(obj, '', function (res) {
        if (res.value) {
            var result = res.value;
            if (result.IsError)
                $("#frm_msg").html(result.Message);
            else {
                $("#frm_msg").html(result.Message);
            }
        }
        $('.frm_loadstatus').hide();
    });
}
function takerip() {
    $('.frm_takeintotomb_loadstatus').show();
    var obj = {
        TreeMemberID: tmid,
        TombGroupID: $('#cboTombGroup').find('option:selected').val(),
        Name: $('input[name="TombName"]').val(),
        Order: $('#cboOrder').find('option:selected').val()
    };

    obj = JSON.stringify(obj);

    GPVN.System.API.NTTT.ChuyenVaoNghiaTrang(obj, '', function (res) {
        if (res.value) {
            var result = res.value;
            if (result.IsError)
                $("#frm_crt_msg").html(result.Message);
            else {
                $("#frm_crt_msg").html(result.Message);
            }
        }
        $('.frm_takeintotomb_loadstatus').hide();
    });
}

function editmember(mid) {
    mode = 1;
    $("#hdpr").val(mid);
    $('#dlg_tmform').modal({ closeExisting: false, escapeClose: true });
    LoadInfo(mid);
}
function takeintotomb(mid, name) {
    tmid = mid;
    $('input[name="TombName"]').val('Phần mộ: '+ name);
    LoadTombGroup(function () {
        $('#dlg_takeintotomb').modal({ closeExisting: false, escapeClose: true });
    });    
}
function addmember(mid) {
    clearForm();
    mode = 0;
    $("#hdpr").val(mid);
    $('#dlg_tmform').modal({ closeExisting: false, escapeClose: true });
}
function deletemember(mid) {
    var r = confirm("Bạn thật sự chắc chắn muốn xóa Thành viên này khỏi Cây gia phả?");
    if (r == true) {
        GPVN.System.API.ThanhVien.XoaThanhVien(mid, '', function (res) {
            if (res.value) {
                var result = res.value;
                if (result.IsError)
                    alert(result.Message);
                else {
                    alert(result.Message);
                }
            }
        });
    }
}
function clearForm()
{
    $('input[name="FullName"]').val('');
    $('input[name="PartnerName"]').val('');
    $('#avatar').attr('src', '/upload/common/default.png');
    $('input[name="BirdDate"]').val('');
    $('input[name="RipDate"]').val('');
    $('#cboLiveStatus').val(1);
    $('#cboOrderInFamily').val(1);
}
function showHideRipBox(val) {
    switch (val.toString()) {
        case "1":
            $('#rip_box').hide();
            break;
        case "2":
            $('#rip_box').show();
            break;
        default:
            $('#rip_box').hide();
            break;
    }
}
function loadOrderRIP()
{
    for(var i=1; i<=50;i++)
    {
        $("#cboOrder").append($("<option></option>").val(i).html(i));
    }
}
function loadOrderInFamily() {
    for (var i = 1; i <= 50; i++) {
        $("#cboOrderInFamily").append($("<option></option>").val(i).html(i));
    }
}