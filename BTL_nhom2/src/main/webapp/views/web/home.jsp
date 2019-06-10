<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">

<link rel="stylesheet" href="<c:url value='/adcss/bootstrap.min.css'/>" />

<link href="<c:url value='/adcss/bootstrap.css'/>" rel="stylesheet">
<link href="<c:url value='/adcss/bootstrap.icon-large.min.css'/>"
	rel="stylesheet" />
<link rel="stylesheet" href="<c:url value='/adcss/all.css'/>" />

<meta
	content="giapha, giatoc, tocpha, giaphả, giatộc, gia pha, gia toc, toc pha, gia phả, gia tộc, tộc phả,caygiapha, cay gia pha, cay gia dinh"
	name=keywords>
<meta property="og:url" content="" />
<meta property="og:title" content="Việt Nam Gia phả" />
<meta property="og:description"
	content="Nơi lưu trữ Gia phả của người Việt Nam" />
<meta property="og:image" />

<meta property="og:type" content="" />
<title>Gia Phả Online</title>



</head>
<body>
	<a href='<c:url value="/dangnhap?action=login"/>'>Đăng nhập</a>
	<a href='<c:url value="/familytree"/>'>family tree</a>
	<nav class="navbar navbar-dark bg-dark navbar-expand-sm">
		<div class="container">
			<a class="navbar-brand" href="#"> <img
				src="<c:url value='/adimgs/exit.png'/>" alt="Gia phả online" />Gia
				Phả Online
			</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse"
				data-target="#navbar-list-11" aria-controls="navbarNav"
				aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbar-list-11">
				<ul class="navbar-nav ml-auto">
					<li class="nav-item"><a class="nav-link" href="#">Gia phả
							là gì</a></li>
					<li class="nav-item"><a class="nav-link" href="#">Hướng
							dẫn làm gia phả</a></li>
					<li class="nav-item"><a class="nav-link" href="#"
						onclick="open_login()">Đăng nhập</a></li>
				</ul>
			</div>
		</div>
	</nav>
	<!-- HEADER NAV - END -->
	<nav class="navbar navbar-light bg-light navbar-expand-sm">
		<div class="container">
			<div class="input-group">
				<input type="text" id="name" class="form-control"
					placeholder="Tìm theo tên tộc họ" aria-label="Tìm"
					aria-describedby="button-addon2">
				<div class="input-group-append">
					<button class="btn btn-info" type="button" onclick="loadGp()"
						id="search_id">Tìm kiếm</button>
				</div>
			</div>
		</div>
	</nav>



	<div class="container-fluid content-row" id="list_gp">
		
	</div>
	<nav class="navbar navbar-dark bg-dark navbar-expand-sm">
		<div class="container">
			<p style="color: white">Dự án lưu trữ gia phả của người Việt</p>
		</div>
	</nav>
	<script src="<c:url value='/adjs/jquery-3.2.1.min.js'/>"></script>
	<script src="<c:url value='/adjs/popper.min.js'/>"></script>
	<script src="<c:url value='/adjs/bootstrap.min.js'/>"></script>
	<script src="<c:url value='/adjs/login.js'/>"></script>

	<script type="text/javascript">
	function ucFirstAllWords( str )
	{
		var pieces = str.split(" ");
		for ( var i = 0; i < pieces.length; i++ )
		{
			var j = pieces[i].charAt(0).toUpperCase();
			pieces[i] = j + pieces[i].substr(1);
		}
		return pieces.join(" ");
	}
	
	$(document).ready(function() {
		$('#search_id').keypress(function(event){
			var keycode = (event.keyCode ? event.keyCode : event.which);
			if(keycode == '13' ||keycode ==13){
			   loadGp();
			}
		});
		$( "#username" )
		  .blur(function() {
			  $( "#username" ).val( ""+$( "#username" ).val().trim().toLowerCase() );
			  checku();
		  });
		$( "#email" )
		  .blur(function() {
			  checke();
		  });
		$( "#loginid" )
		  .blur(function() {
			  $( "#loginid" ).val( ""+$( "#loginid" ).val().trim().toLowerCase() );
		  });
		$( "#fullname" )
		  .blur(function() {
			  $( "#fullname" ).val( ""+ ucFirstAllWords( $( "#fullname" ).val().trim()) );
		  });
loadGp();
	});
	
	function loadGp(){
		$("#list_gp").html('<img src="<c:url value='/adimgs/loading1.gif'/>">');
		var name = $("#name").val();
		var url = "http://localhost:8080/adv/familytree?name="+name+"";
		var request;
		
		if (window.XMLHttpRequest) {
            request = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            request = new ActiveXObject("Microsoft.XMLHTTP");
        }
 
        try {
            request.onreadystatechange = getInfo;
            request.open("GET", url, true);
            request.send();
        } catch (e) {
            alert("Unable to connect to server");
        }
    
 
    	function getInfo() {
        	if (request.readyState == 4) {
        	    var val = request.responseText;
        	    $("#list_gp").html(val);
       	 	}
  	  	}
	}
	function forget_password(){
		alert("Chỗ ID, bạn nhập vào email của bạn.\nSau đó hệ thống sẽ tự gửi về đó password mới.");
		
		var username = $("#loginid").val().trim();
		var error = 0;
		if( username.length<2 ){
			$('[name="loginid"]').parent().parent().addClass('has-error');
			$('[name="loginid"]').next().text("Nhập vào [loginid] để lấy lại password");
			error = 1;
		}
		else{
			if( isEmail(username)==false ){
				$('[name="loginid"]').parent().parent().addClass('error');
				$('[name="loginid"]').next().text("hoặc nhập vào [email] để lấy lại password");
				error = 1;
			}
			else{
				$('[name="loginid"]').parent().parent().attr('class','').addClass('form-group');
				$('[name="loginid"]').next().text("");
			}
		}
		if(error ===1 ){
			$("#login_msg").html('Có lỗi');
			return;
		}
		$("#login_msg").html('<img src="<c:url value='/adimgs/loading1.gif'/>">');

		// ajax
        $.ajax({
			url : "login.php",
            type : "POST",
			data: {
				username:username,
				func:"forget"
			},
            success: function(datastr) {
				data = JSON.parse(datastr);
				alert(data.reason);
				$("#pass").val("");
				$("#login_msg").html('');
            },
            error: function(jqXHR, textStatus, errorThrown) {
				alert('Error '+ textStatus);
            }
        });
	}
	
	function open_login()
	{
		$('#modal_form_register').modal('hide'); // show bootstrap modal
		$('#form')[0].reset(); // reset form on modals
		$('.form-group').removeClass('has-error'); // clear error class
		$('#modal_form_login').modal('show'); // show bootstrap modal
		$("#loginid").focus();
	}
	
	function logout()
	{
		// ajax
        $.ajax({
			url : "login.php",
            type : "POST",
			data: {func:"logout"},
            success: function(datastr) {
				data = JSON.parse(datastr);
				if( data.status=='ok'){
					location.reload();
				}
            },
            error: function(jqXHR, textStatus, errorThrown) {
				alert('Error '+ textStatus);
            }
        });
	}
	function isEmail(email) {
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
	}
	function open_register()
	{
		$('#modal_form_login').modal('hide'); // show bootstrap modal
		$('.form-group').removeClass('has-error'); // clear error class
		$('#modal_form_register').modal('show'); // show bootstrap modal
		$("#username").focus();
	}
	
	var error = 0;
	function register()
	{
		//console.log("Đang ký");
		var username = $("#username").val().trim();
		var password = $("#password").val().trim();
		var email = $("#email").val().trim();
		var fullname = $("#fullname").val().trim();
		//
		if( error > 1 ){
			return;
		}
		if( username.length<5 ){
			$('[name="username"]').parent().parent().addClass('error');
			$('[name="username"]').next().text("[username] không để trống, >5 ký tự");
			error = 1;
		}
		else{
			$('[name="username"]').parent().parent().attr('class','').addClass('form-group');
			$('[name="username"]').next().text("");
		}
		if( password.length<8 ){
			$('[name="password"]').parent().parent().addClass('error');
			$('[name="password"]').next().text("[password] không để trống, >=8 ký tự");
			error = 1;
		}
		else{
			$('[name="password"]').parent().parent().attr('class','').addClass('form-group');
			$('[name="password"]').next().text("");
		}
		if( isEmail(email)==false ){
			$('[name="email"]').parent().parent().addClass('error');
			$('[name="email"]').next().text("[email] phải đúng");
			error = 1;
		}
		else{
			$('[name="email"]').parent().parent().attr('class','').addClass('form-group');
			$('[name="email"]').next().text("");
		}

		if( fullname.length<5 ){
			$('[name="fullname"]').parent().parent().addClass('has-error');
			$('[name="fullname"]').next().text("[fullname] không để trống, 10 ký tự");
			error = 1;
		}
		else{
			$('[name="fullname"]').parent().parent().attr('class','').addClass('form-group');
			$('[name="fullname"]').next().text("");
		}
		if(error ==1 ){
			$("#register_msg").html('Có lỗi nhập thông tin');
			return;
		}
		$("#register_msg").html('<img src="<c:url value='/adimgs/loading1.gif'/>">');
		
		var sendInfo = {
			password: password,
			username:username,
			email:email,
			fullname:fullname,
			func:"register",
		};
		// ajax
        $.ajax({
			url : "login.php",
            type : "POST",
			data: sendInfo,
            success: function(datastr) {
				data = JSON.parse(datastr);
				$("#register_msg").html(data.reason);
				if( data.status=='ok'){
					$('#modal_form_register').modal('hide'); // show bootstrap modal
					open_login();
				}
            },
            error: function(jqXHR, textStatus, errorThrown) {
				$("#register_msg").html('Có lỗi đăng ký thành viên');
				alert('Error '+ textStatus);
            }
        });
	}
	function checke()
	{
		//console.log("Đang ký");
		$("#register_msg").html('<img src="<c:url value='/adimgs/loading1.gif'/>">');
		var email = $("#email").val().trim();
		if( isEmail(email)==false ){
			$('[name="email"]').parent().parent().addClass('error');
			$('[name="email"]').next().text("[email] phải đúng");
			error = 1;
		}
		else{
			$('[name="email"]').parent().parent().attr('class','').addClass('form-group');
			$('[name="email"]').next().text("");
		}
		if(error ==1 ){
			$("#register_msg").html('Có lỗi nhập thông tin');
			return;
		}
		var sendInfo = {
			email:email,
			func:"checke",
		};
		// ajax
        $.ajax({
			url : "login.php",
            type : "POST",
			data: sendInfo,
            success: function(datastr) {
				data = JSON.parse(datastr);
				if( data.status>0){
					$('[name="email"]').parent().parent().addClass('error');
					$('[name="email"]').next().text("[email] có lỗi. Email đã có người dùng");
					error = 2;
				}
				else{
					$('[name="email"]').parent().parent().attr('class','').addClass('form-group');
					$('[name="email"]').next().text("");
					error = 0;
				}
				$("#register_msg").html('');
            },
            error: function(jqXHR, textStatus, errorThrown) {
				alert('Error '+ textStatus);
            }
        });
	}
	function checku()
	{
		//console.log("Đang ký");
		$("#register_msg").html('<img src="<c:url value='/adimgs/loading1.gif'/>">');
		var username = $("#username").val().trim();
		var email = $("#email").val().trim();
		if( username.length<5 || username.indexOf(" ")>-1 ){
			$('[name="username"]').parent().parent().addClass('error');
			$('[name="username"]').next().text("[username] không để trống, >5 ký tự");
			error = 1;
		}
		else{
			$('[name="username"]').parent().parent().attr('class','').addClass('form-group');
			$('[name="username"]').next().text("");
		}
		if(error ==1 ){
			$("#register_msg").html('Có lỗi nhập thông tin');
			return;
		}
		var sendInfo = {
			username:username,
			func:"checku",
		};
		// ajax
        $.ajax({
			url : "login.php",
            type : "POST",
			data: sendInfo,
            success: function(datastr) {
				data = JSON.parse(datastr);
				if( data.status>0){
					$('[name="username"]').parent().parent().addClass('error');
					$('[name="username"]').next().text("[username] đã có người chọn");
					error = 3;
				}
				else{
					$('[name="username"]').parent().parent().attr('class','').addClass('form-group');
					$('[name="username"]').next().text("");
					error = 0;
				}
				$("#register_msg").html('');
            },
            error: function(jqXHR, textStatus, errorThrown) {
				alert('Error '+ textStatus);
            }
        });
	}
	function open_reset_password(code){
		$("#reset_code").val(""+code);
		$('#modal_form_reset_password').modal('show');
	}
	function reset_password()
	{
		var code = $("#reset_code").val().trim();
		var reset_pass = $("#reset_pass").val().trim();
		var reset_pass1 = $("#reset_pass1").val().trim();
		var error = 0;
		if( reset_pass!=reset_pass1 ){
			$('[name="reset_pass1"]').parent().parent().addClass('has-error');
			$('[name="reset_pass1"]').next().text("Phải nhập lại password 2 lần giống nhau");
			error = 1;
		}
		else{
			$('[name="reset_pass1"]').parent().parent().attr('class','').addClass('form-group');
			$('[name="reset_pass1"]').next().text("");
		}
		if(error ===1 ){
			$("#reset_msg").html('Có lỗi');
			return;
		}
		$("#reset_msg").html('<img src="<c:url value='/adimgs/loading1.gif'/>">');
		var sendInfo = {
			code: code,
			reset_pass:reset_pass,
			reset_pass1:reset_pass1,
			func:"reset_password",
		};
		// ajax
        $.ajax({
			url : "login.php",
            type : "POST",
			data: sendInfo,
            success: function(datastr) {
				data = JSON.parse(datastr);
				$("#reset_msg").html(data.reason);
				if( data.status=='ok'){
					alert("Thành công: " + data.reason);
					$('#modal_form_reset_password').modal('hide'); // show bootstrap modal
					$('#modal_form_login').modal('show'); // show bootstrap modal
					window.location.href = "http://www.vietnamgiapha.com/m";
				}
				else{
					alert("Có lỗi: " + data.reason);
				}
            },
            error: function(jqXHR, textStatus, errorThrown) {
				$("#reset_msg").html('Có lỗi');
				alert('Error '+ textStatus);
            }
        });
	}
</script>
	<!-- Bootstrap modal -->
	<div class="modal fade" id="modal_form_login" tabindex="-1"
		role="dialog">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title" id="largeModalLabel">ĐĂNG NHẬP</h4>
				</div>
				<div class="modal-body form">
					<div id="login_msg"></div>
					<form id="form" data-parsley-validate=""
						class="form-horizontal form-label-left" novalidate="">
						<div class="form-group">
							<input type="text" name="loginid" id="loginid"
								class="form-control" placeholder="ID" required autofocus>
							<span class="help-block"></span>
						</div>
						<div class="form-group form-float">
							<input type="password" name="pass" id="pass" class="form-control"
								value="" placeholder="Password"> <span
								class="help-block"></span>
						</div>
					</form>
					<div>
						<button type="button"
							class="btn btn-lg btn-primary btn-block text-uppercase"
							onclick="login()">ĐĂNG NHẬP</button>
						<hr class="my-4">
						<button type="button"
							class="btn btn-lg btn-info btn-block text-uppercase"
							onclick="open_register()">Đăng ký mới</button>
						<button type="button"
							class="btn btn-lg btn-info btn-block text-uppercase"
							onclick="forget_password()">Quên password</button>
						<button class="btn btn-lg btn-info btn-block text-uppercase"
							data-dismiss="modal" type="button">Bỏ qua</button>
					</div>
				</div>
			</div>
			<!-- /.modal-content -->
		</div>
		<!-- /.modal-dialog -->
	</div>
	<!-- /.modal -->

	<div class="modal fade" id="modal_form_register" tabindex="-1"
		role="dialog">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title" id="largeModalLabel">ĐĂNG KÝ THÀNH
						VIÊN</h4>
				</div>
				<div class="modal-body form">
					<div id="register_msg"></div>
					<form id="form1" data-parsley-validate=""
						class="form-horizontal form-label-left" novalidate="">
						<div class="col-sm-12">
							<div class="form-group form-float">
								<div class="form-line">
									<input type="text" name="username" id="username"
										class="form-control" placeholder="Email hoặc ID"> <span
										class="help-block"></span>
								</div>
							</div>
						</div>
						<div class="col-sm-12">
							<div class="form-group form-float">
								<div class="form-line">
									<input type="text" name="password" id="password"
										class="form-control" value="" placeholder="Password">
									<span class="help-block"></span>
								</div>
							</div>
						</div>
						<div class="col-sm-12">
							<div class="form-group form-float">
								<div class="form-line">
									<input type="text" name="email" id="email" class="form-control"
										placeholder="Email của bạn."> <span class="help-block"></span>
								</div>
							</div>
						</div>
						<div class="col-sm-12">
							<div class="form-group form-float">
								<div class="form-line">
									<input type="text" name="fullname" id="fullname"
										class="form-control" value="" placeholder="Tên đầy đủ">
									<span class="help-block"></span>
								</div>
							</div>
						</div>
					</form>
					<div>
						<button type="button"
							class="btn btn-lg btn-primary btn-block text-uppercase"
							onclick="register()">Đăng ký mới</button>
						<hr class="my-4">
						<button type="button"
							class="btn btn-lg btn-info btn-block text-uppercase"
							onclick="open_login()">Đăng nhập</button>
						<button class="btn btn-lg btn-info btn-block text-uppercase"
							data-dismiss="modal" type="button">Bỏ qua</button>
					</div>
				</div>
			</div>
			<!-- /.modal-content -->
		</div>
		<!-- /.modal-dialog -->
	</div>
	<!-- /.modal -->
	<div class="modal fade" id="modal_form_reset_password" tabindex="-1"
		role="dialog">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h4 class="modal-title" id="largeModalLabel">RESET PASSWORD</h4>
				</div>
				<div class="modal-body form">
					<div id="login_msg"></div>
					<form id="form" data-parsley-validate=""
						class="form-horizontal form-label-left" novalidate="">
						<div class="col-sm-12">
							<div class="form-group form-float">
								<div class="form-line">
									<input type="text" name="reset_code" id="reset_code"
										class="form-control" readonly> <span
										class="help-block"></span>
								</div>
							</div>
						</div>
						<div class="col-sm-12">
							<div class="form-group form-float">
								<div class="form-line">
									<input type="text" name="reset_pass" id="reset_pass"
										class="form-control" value="" placeholder="Password mới">
									<span class="help-block"></span>
								</div>
							</div>
						</div>
						<div class="col-sm-12">
							<div class="form-group form-float">
								<div class="form-line">
									<input type="text" name="reset_pass1" id="reset_pass1"
										class="form-control" value="" placeholder="Password nhập lại">
									<span class="help-block"></span>
								</div>
							</div>
						</div>
					</form>
					<div>
						<button type="button"
							class="btn btn-lg btn-primary btn-block text-uppercase"
							onclick="reset_password()">
							<i class="fa fa-sign-in"></i> Lưu password mới
						</button>
					</div>
				</div>
			</div>
			<!-- /.modal-content -->
		</div>
		<!-- /.modal-dialog -->
	</div>
	<!-- /.modal -->
</body>
</html>