$(document).ready(function () {
    genCaptcha('#imgSec');
    $("#btn_register").click(function () {        
        register(function (res) {
            if(!res.IsError)
                setTimeout(function () { redirectToUcp(); }, 3000);
        });
    });
    $("#lnk_regnew").click(function () {
        $('#dlg_register').modal({ closeExisting: false, escapeClose: true });
    });
    $("#imgSec").click(function () {
        $("#imgSec").attr('src', '');
        genCaptcha('#imgSec');
    });
    
});

function genCaptcha(ctrlId) {
    System.Security.Captcha.GetImgUrl(function (res) {
        if (res.value) {
            $(ctrlId).attr('src', res.value)
        }
    });
}
function register(callback) {
    $('.frm_loadstatus').show();
    var obj = {
        FullName: $('input[name="FullName"]').val(),
        UserName: $('input[name="UserName"]').val(),
        Password: $('input[name="Password"]').val(),
        ConfirmPassword: $('input[name="ConfirmPassword"]').val(),
        CaptChar: $('#captConfirm').val()
    };
    obj = JSON.stringify(obj);
    GPVN.System.API.UserFE.RegisterNew(obj, function (res) {
        if (res.value) {
            var result = res.value;
            if (result.IsError)
                $("#update_msg").html(result.Message);
            else {
                $("#update_msg").html(result.Message);                
            }
        }
        callback(result);
        genCaptcha('#imgSec');
        $('.frm_loadstatus').hide();
    });
}
function redirectToUcp()
{
    window.location.href = "/ucp.aspx";
}