var cin = '';
var type = 1;
var target = '';
var attr = '';
$(document).ready(function () {
    $("#itb_new_folder").click(function () {
        $('#ires_msg').html('');
        if ($('#inew').length) return;
        var fd='<div id="inew"><a href="javascript:void(0)" class="folder"><img src="/img/utils/folder.png" /></a><input type="text" value="New folder" /></div>';
        if($('.ctn1:last').length) $('.ctn1:last').after(fd);else $('#ifolder_content').append(fd);
        
        $('#inew input').focus(); $('#inew input').select();
        $('#inew input').keypress(function (e) {
            var code = e.keyCode || e.which;
            if (code == 13) { //Enter keycode
                CreateFolder(function () {});
            }
        });
        $('#inew input').focusout(function () {
            CreateFolder(function () {});
        });
    });
    $('#ilibfileupload').fileupload({
        url: 'ctrls/file_mgr/FileUploadHandler.ashx?upload=start',
        add: function (e, data) {
            console.log('add', data);
            $('#iprogressbar').show();
            data.submit();
        },
        progress: function (e, data) {
            var progress = parseInt(data.loaded / data.total * 100, 10);
            $('#iprogressbar div').css('width', (progress +2)+ '%');
        },
        success: function (response, status) {
            $('#iprogressbar').hide();
            $('#iprogressbar div').css('width', '0%');
            var res = JSON.parse(response);
            if (res.IsError == "False") {
                if (res.Exists != "True") {
                    $('#ifolder_content').append(String.format('<div><img class="pic" src="{0}" /><p>{1}</p></div>', res.Path, res.Name));
                    enableFileEvent();
                }
            } else {
                $('#ires_msg').addClass('error').html(res.Message);
            }
        },
        error: function (error) {
            $('#iprogressbar').hide();
            $('#iprogressbar div').css('width', '0%');
            console.log('error', error);
        }
    });
    $("#itb_up").click(function () {
        ShowUserFolder('', function () { });
    });    
    $("#itb_delete").click(function () {
        if(type==1)
            DeleteFolder(function () { });
        else DeleteFile(function () { });
    });
});
function fmOnLoad(ctrl, att)
{
    target = ctrl;
    attr = att;
    ShowUserFolder('', function () { });
}
function ShowUserFolder(path, callback) {
    $('#ifolder_content').html('');
    $('#ires_msg').html('');
    $('#iloading').show();
    if (path.length > 0) $('#itb_new_folder').hide(); else $('#itb_new_folder').show();
    GPVN.System.API.UserFE.BrowseFolder(path, function (res) {
        if (res.value) {            
            var result = res.value;
            if (result.IsError) {
                $('#ires_msg').addClass('error');
                $('#ires_msg').html(result.Message);
            }
            else {
                var transform = {
                    tag: 'div', class: 'ctn${Type}', html: function () { return formatFolderItem(this.Type, this.Name, this.Path); }
                };
                $('#ifolder_content').json2html(result.Value, transform);
                enableFolderEvent();
                enableFileEvent();
            }            
        }
        else {
            $('#ifolder_content').html('<div style="text-align:center;padding:10px 0;font-size:16px; width: 100%">Không tìm thấy dữ liệu</div>');
        }
        $('#iloading').hide();
        callback();
    });
}
function CreateFolder(callback) {
    var fn = $('#inew input').val();
    $('#ires_msg').removeAttr('class').html('');
    $('#iloading').show();
    GPVN.System.API.UserFE.CreateFolder(fn, function (res) {
        if (res.value) {
            $('#iloading').hide();
            var result = res.value;
            if (result.IsError) {
                $('#ires_msg').addClass('error');
                $('#ires_msg').html(result.Message);
                $('#inew input').focus(); $('#inew input').select();
            }
            else {
                $('#inew').remove();
                var fd = '<div class="ctn1"><a href="javascript:void(0)" ondblclick="ShowUserFolder(\'' + fn + '\', function(){})" class="folder"><img src="/img/utils/folder.png" /><p>' + fn + '</p></a></div>';
                if ($('.ctn1:last').length) $('.ctn1:last').after(fd); else $('#ifolder_content').append(fd);
                $('#ires_msg').addClass('success');
                $('#ires_msg').html(result.Message);
                enableFolderEvent();
            }
        }
    });
}
function DeleteFolder(callback) {
    $('#ires_msg').removeAttr('class').html('');
    var r = confirm('Bạn chắc chắn muốn xóa Thư mục này và các file trong đó?');
    if (r) {
        $('#iloading').show();
        GPVN.System.API.UserFE.DeleteFolder(cin, function (res) {
            if (res.value) {
                $('#iloading').hide();
                var result = res.value;
                if (result.IsError) {
                    $('#ires_msg').addClass('error');
                    $('#ires_msg').html(result.Message);
                }
                else {
                    $('#ifsel').remove();
                    cin = '';
                    $('#ires_msg').addClass('success');
                    $('#ires_msg').html(result.Message);
                }
            }
        });
    }
}
function DeleteFile(callback) {
    $('#ires_msg').removeAttr('class').html('');
    var r = confirm('Bạn chắc chắn muốn xóa file: '+cin+'?');
    if (r) {
        $('#iloading').show();
        GPVN.System.API.UserFE.DeleteFile(cin, function (res) {
            if (res.value) {
                $('#iloading').hide();
                var result = res.value;
                if (result.IsError) {
                    $('#ires_msg').addClass('error');
                    $('#ires_msg').html(result.Message);
                }
                else {
                    $('#ifsel').remove();
                    cin = '';
                    $('#ires_msg').addClass('success');
                    $('#ires_msg').html(result.Message);
                }
            }
        });
    }
}

function formatFolderItem(type, name, path) {
    var res = '';
    if (type == 1) {
        res = String.format('<a href="javascript:void(0)" ondblclick="ShowUserFolder(\'' + name + '\', function(){})" class="folder"><img src="/img/utils/folder.png" /><p>{0}</p></a>', name);
    }
    else {
        res = String.format('<img class="pic" src="{0}" /><p>{1}</p>', path, name);
    }
    return res;
}
String.format = function () {
    var s = arguments[0];
    for (var i = 0; i < arguments.length - 1; i++) {
        var reg = new RegExp("\\{" + i + "\\}", "gm");
        s = s.replace(reg, arguments[i + 1]);
    }
    return s;
}
function enableFileEvent()
{
    $("#ifolder_content>div>img").click(function () {
        $("#ifolder_content img").removeClass('active');
        $(this).addClass('active');
        $("#ifolder_content>div").removeAttr('id');
        cin = $(this).attr('src');
        $(this).parent().attr('id', 'ifsel');
        type = 2;
    });
    $("#ifolder_content>div>img").dblclick(function () {
        $(target).attr(attr, $(this).attr('src'));
        $.modal.close();
    });
}
function enableFolderEvent()
{
    $("#ifolder_content a").click(function () {
        $("#ifolder_content a").removeClass('active');
        $(this).addClass('active');
        cin = $(this).children().last().html();
        $(this).parent().attr('id', 'ifsel');
        type = 1;
    });
}