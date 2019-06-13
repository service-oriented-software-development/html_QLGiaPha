$(document).ready(function () {

    fnLoggedin();
    $("#btnLogin").click(function () {
        fnLogin();
    });
    
});

/* member */
function fnLogin()
{
    GPVN.System.API.UserFE.Authenticate($('#txtUsername').val(), $('#txtPassword').val(), true, function (res) {
        if (res.value) {
            var result = res.value;
            if (!result.Value) {
                alert(result.Message);
            }
            else {
                $('#member_area').html(result.Value);
            }
        }
    });
}
function fnLoggedin()
{
    GPVN.System.API.UserFE.AutoLogin(function (res) {
        if (res.value) {
            var result = res.value;
            if (result.Value) {
                $('#member_area').html(result.Value);
            }
        }
    });
}
