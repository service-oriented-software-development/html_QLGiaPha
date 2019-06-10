function img1(){
	
    var a = document.getElementById('img0');
    var tree = document.getElementsByClassName('tree');
    
    var file = document.getElementById('img1');
    
    if(a.src.indexOf("minus4")!=-1){
        
        a.src = "template/familytree/images/plus4.gif";
        file.src = "template/familytree/images/folderOpen.gif";
        for(var i = 0; i < tree.length; i++){
        	 tree[i].style = "display:none";
        }
       

        
    }
     
    else {
        a.src = "template/familytree/images/minus4.gif";
        file.src = "template/familytree/images/folderClosed.gif";
        
        for(var i = 0; i < tree.length; i++){
       	 tree[i].style = "";
       }

        
    }
    
//    <link rel="stylesheet" type="text/css"
//    	href="<c:url value='/template/familytree/layout.css'/>" media="all" />
}
