$(document).ready(function () {
    LoadTreeInfo(function () {
        $('.progress').hide();
    });
    $("#btn_save").click(function () {
        $('.progress').show();
        SaveTreeInfo(function () {
            $('.progress').hide();
        });
    });
});

/* giapha */
function LoadTreeInfo() {
    $('.progress').show();
    GPVN.System.API.CayGiaPha.GetUcpInfo(function (res) {
        if (res.value) {
            var result = JSON.parse(res.value);

            $('#tree_creator').html('Người tạo: ' + result.Creator);
            $('#tree_name').html(result.Name);
            $('#tree_page').attr('href', '/default.aspx?cp=dongho&id=' + result.ID);

            $('input[name="FamilyName"]').val(result.Name);
            $('input[name="Anniversary"]').val(result.Anniversary);
            $('#created_date').html(result.CreatedDate);
            $('input[name="Slogan"]').val(result.Slogan);
            $('#tree_id').val(result.ID);
            $('#member_count').html(result.MemberCount);
            $('input[name="Address"]').val(result.Address);
            $('#view_count').html(result.ViewCount);
            $('#gp_status').html(result.Status);
            $('#cboPublicLevel').val(result.PublicType);
            $('input[name="Password"]').val(result.Password);
            CKEDITOR.instances.txtDescription.setData(result.Description);
        }        
    });
}
function SaveTreeInfo(completeCallback) {
    var obj = {
        ID: $('#tree_id').val(),
        Name: $('input[name="FamilyName"]').val(),
        Anniversary: $('input[name="Anniversary"]').val(),
        Description: CKEDITOR.instances.txtDescription.getData(),
        Address: $('input[name="Address"]').val(),
        Slogan: $('input[name="Slogan"]').val(),
        PublicLevel: $('#cboPublicLevel').find('option:selected').val(),
        Password: $('input[name="Password"]').val()
    };
    obj = JSON.stringify(obj);
    console.log(obj);
    GPVN.System.API.CayGiaPha.Update(obj, 'UCP_TREE_INF', function (res) {
        if (res.value) {
            var result = res.value;
            if (result.IsError)
                $('#msg').html(result.Message);
            else {
                $('#msg').html(result.Message);
            }
        }
        completeCallback();        
    });   
}
