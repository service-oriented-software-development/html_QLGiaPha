$(document).ready(function () {

    genCaptcha('#imgSec');

    $("#btnSend").click(function () {
        $('img.postCmPending').show();
        saveFeedback(function () { });
    });
});

function saveFeedback(postSuccess)
{
    var obj = {
        Address: '',
        Detail: $("#txtContent").val(),
        Email: '',
        FullName: $("#txtFullName").val(),
        PhoneNumber: $("#txtPhoneNumber").val(),
        Title: $("#txtTitle").val()
    };
    //obj = JSON.stringify(obj);
    System.Data.Utils.FeedBackFE.Insert(obj, $('#captConfirm').val(), 'FE_CONTACT', function (res) {
        if(res.value)
        {
            var result = res.value;
            if (result.IsError)
                $("#formMsg").html('<div class="error">' + result.Message + '</div>');
            else
            {
                $("#formMsg").html('<div class="success">' + result.Message + '</div>');
                $("#btn_holder").html('');
                $("#txtContent").val('');
                $("#txtFullName").val('');
                $("#txtPhoneNumber").val('');
                $("#txtTitle").val('');
                $("#tfoot").html('');
            }
        }
        postSuccess();
    });
    genCaptcha('#imgSec');    
}