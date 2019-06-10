//Các xử lý kịch bản cho user.html



//Sinh cấu trúc chọn quyền
function generatePermis(){
	//danh sách quyền
	var permis = new Array();
		permis[0] = "Không rõ";
		permis[1] = "1 tuổi";
		permis[2] = "2 tuổi";
		permis[3] = "3 tuổi";
		permis[4] = "4 tuổi";
		permis[5] = "5 tuổi";
		permis[6] = "6 tuổi";
		permis[7] = "7 tuổi";
		permis[8] = "8 tuổi";
		permis[9] = "9 tuổi";
		permis[10] = "10 tuổi";
		permis[11] = "11 tuổi";
		permis[12] = "12 tuổi";
		permis[13] = "13 tuổi";
		permis[14] = "14 tuổi";
		permis[15] = "15 tuổi";
		permis[16] = "16 tuổi";
		permis[17] = "17 tuổi";
		permis[18] = "18 tuổi";
		permis[19] = "19 tuổi";
		permis[20] = "20 tuổi";
		permis[21] = "21 tuổi";
		permis[22] = "22 tuổi";
		permis[23] = "23 tuổi";
		permis[24] = "24 tuổi";
		permis[25] = "25 tuổi";
		permis[26] = "26 tuổi";
		permis[27] = "27 tuổi";
		permis[28] = "28 tuổi";
		permis[29] = "29 tuổi";
		permis[30] = "30 tuổi";
		permis[31] = "31 tuổi";
		permis[32] = "32 tuổi";
		permis[33] = "33 tuổi";
		permis[34] = "34 tuổi";
		permis[35] = "35 tuổi";
		permis[36] = "36 tuổi";
		permis[37] = "37 tuổi";
		permis[38] = "38 tuổi";
		permis[39] = "39 tuổi";
		permis[40] = "40 tuổi";
		permis[41] = "41 tuổi";
		permis[42] = "42 tuổi";
		permis[43] = "43 tuổi";
		permis[44] = "44 tuổi";
		permis[45] = "45 tuổi";
		permis[46] = "46 tuổi";
		permis[47] = "47 tuổi";
		permis[48] = "48 tuổi";
		permis[49] = "49 tuổi";
		permis[50] = "50 tuổi";
		permis[51] = "51 tuổi";
		permis[52] = "52 tuổi";
		permis[53] = "53 tuổi";
		permis[54] = "54 tuổi";
		permis[55] = "55 tuổi";
		permis[56] = "56 tuổi";
		permis[57] = "57 tuổi";
		permis[58] = "58 tuổi";
		permis[59] = "59 tuổi";
		permis[60] = "60 tuổi";
		permis[61] = "61 tuổi";
		permis[62] = "62 tuổi";
		permis[63] = "63 tuổi";
		permis[64] = "64 tuổi";
		permis[65] = "65 tuổi";
		permis[66] = "66 tuổi";
		permis[67] = "67 tuổi";
		permis[68] = "68 tuổi";
		permis[69] = "69 tuổi";
		permis[70] = "70 tuổi";
		permis[71] = "71 tuổi";
		permis[72] = "72 tuổi";
		permis[73] = "73 tuổi";
		permis[74] = "74 tuổi";
		permis[75] = "75 tuổi";
		permis[76] = "76 tuổi";
		permis[77] = "77 tuổi";
		permis[78] = "78 tuổi";
		permis[79] = "79 tuổi";
		permis[80] = "80 tuổi";
		permis[81] = "81 tuổi";
		permis[82] = "82 tuổi";
		permis[83] = "83 tuổi";
		permis[84] = "84 tuổi";
		permis[85] = "85 tuổi";
		permis[86] = "86 tuổi";
		permis[87] = "87 tuổi";
		permis[88] = "88 tuổi";
		permis[89] = "89 tuổi";
		permis[90] = "90 tuổi";
		permis[91] = "91 tuổi";
		permis[92] = "92 tuổi";
		permis[93] = "93 tuổi";
		permis[94] = "94 tuổi";
		permis[95] = "95 tuổi";
		permis[96] = "96 tuổi";
		permis[97] = "97 tuổi";
		permis[98] = "98 tuổi";
		permis[99] = "99 tuổi";
		permis[99] = "99 tuổi";
	//Tạo cấu trúc Select
	var opt = "<select name=\"slcAccPermis\" class=\"space c20\" onChange=\"refreshPermis(this.form)\"  >"; //Dấu \ dùng để lấy ký tự đặc biệt bên html. VD: \" để lấy ký tự "
	for(var i = 0; i < permis.length; i++){	
		opt += "<option value=\""+i+"\">"; // "+i+" để chèn giá trị i vào 
		opt += permis[i];
		opt += "</option>";
	}
	opt += "</select>";
	
	//Xuất cấu trúc
	document.write(opt);
}

//Sinh cấu trúc vai trò
function generateRoles(){
	//Danh sách vai trò
	var roles = new Array();
	roles[0] = "Người sử dụng";
	roles[1] = "Chuyên mục";
	roles[2] = "Thể loại";
	roles[3] = "Bài viết & Tin tức";
	roles[4] = "Hệ sản phẩm";
	roles[5] = "Nhóm sản phẩm";
	roles[6] = "Loại sản phẩm";
	roles[7] = "Sản phẩm";
	roles[8] = "Hóa đớn";
	roles[9] = "Khách hàng";
	
	//Tạo cấu trúc
	
	var role = "";
	for(var i = 0; i < roles.length; i++){
		if(i%3==0){
			role += "<div class=\"row space\">";
		}
		role += "<div class=\"c4\">";
		role += "<input type=\"checkbox\" name=\"chks\" id=\"chk"+i+"\" disabled />";
		role += "<label for=\"chk"+i+"\">";
		role += " Quản lý " +roles[i];
		role += "</label>";
		role += "</div>";
		if(i%3==2 || i==roles.length -1){
			role += "<div class=\"clr\"></div>";
			role += "</div>";
		}
	}
	
	//Xuất cấu trúc 
	document.write(role);
}

//Thiết lập các checkbox
function setCheckBox(fn, dis, check){
	//Duyệt các phần tử của form
	for(var i = 0; i<fn.elements.length; i++){
		//kiểm tra
		if(fn.elements[i].type=="checkbox" && fn.elements[i].name=="chks"){
			fn.elements[i].disabled = dis;
			fn.elements[i].checked = check;
		}
	}
	
}

//lấy giá trị quyền thực thi và hiển thị tương ứng
function refreshPermis(fn){
	//lấy quyền
	var permis = parseInt(fn.slcAccPermis.value);
	
	if(permis==4 || permis==5){
		this.setCheckBox(fn, true, true);
	}else if(permis == 3){
		this.setCheckBox(fn, false, true);
	}else if(permis == 2){
		this.setCheckBox(fn, false, false);
	}else{
		this.setCheckBox(fn, true, false);
	}
}

//reset toàn thể
function resetAll(fn){
	fn.reset();
	this.setCheckBox(fn, true, false);
}


//Kiểm tra sự hợp lệ của toàn bộ giá trị
function checkValidUser(fn){
	//lấy thông tin bắt buộc trên giao diện
	var name = fn.txtAccName.value;
	var pass = fn.txtAccPass.value;
	var email = fn.txtAccEmail.value;
	var permis = parseInt(fn.slcAccPermis.value);
	//Biển xác nhận hợp lệ tương ứng
	
	var validName = true;
	var validPass = true;
	var validEmail = true;
	var validPermis = true;
	
	//Biến ghi nhận kết quả kiểm tra từng thành phần giá trị
	var message = "";
	
	//Kiểm tra name
	name = name.trim();
	if(name==""){
		validName = false;
		message = "Thiếu tên đăng nhập cho tài khoản.";
	}else{
		if(name.indexOf(" ")!=-1){
			validName = false;
			message = "Có dấu cách trong tên đăng nhập.";
		}else if(name.length>100){
			validName = false;
			message = "Tên đăng nhập quá dài.";
		}
	}
	
	//Kiểm tra pass
	pass = pass.trim();
	if(pass ==""){
		validPass = false;
		message += "\nThiếu mật khẩu cho tài khoản.";
	}else{
		if(pass.length<6){
			validPass = false;
			message += "\nMật khẩu quá ngắn, cần lớn hơn 5 ký tự.";
		}else if(pass.indexOf(name)!=-1){
			validPass = false;
			message += "\nMật khẩu không nên chứa tên đăng nhập.";
		}
	}
	
	//Kiểm tra email
	email = email.trim();
	if(email == ""){
		validEmail = false;
		message += "\nThiếu thông tin email cho tài khoản.";
	}else {var parttern = /\w+@\w+[.]\w/;
		if(!email.match(parttern)){
			validEmail = false;
			message += "\nKhông đúng định dạng hộp thư.";
		}
	}
	
	//Kiểm tra permis
	if(permis == 2 || permis == 3){
		for(var i=0; i<fn.elements.length; i++){
			if(fn.elements[i].type=="checkbox" && fn.elements[i].name=="chks"){
				if(fn.elements[i].checked){
					validPermis = true;
					break;
				}else{
					validPermis = false;
				}
			}
		}
	}
	
	if(!validPermis){
		message += "\nCần phải có ít nhất 1 Vai Trò cho Quyền này.";
	}
	
	//Thông báo
	if(message != ""){
		window.alert(message);
		if(!validName){
			fn.txtAccName.focus();
			fn.txtAccName.select();
		}else if(!validPass){
			fn.txtAccPass.focus();
			fn.txtAccPass.select();
		}else if(!validEmail){
			fn.txtAccEmail.focus();
			fn.txtAccEmail.select();
		}else if(!validPermis){
			ffn.slcAccPermis.focus();
		}
	}
	
	//Trả về kết quả
	return validName && validPass && validEmail && validPermis;
	
}