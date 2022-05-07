var x = true;
function myeye1(){
    if(x==true){
        document.getElementById("matkhaucu").type="text";
        x = false;
    }
    else{
        document.getElementById("matkhaucu").type="password";
        x = true;
    }
}
function myeye2(){
    if(x==true){
        document.getElementById("matkhaumoi").type="text";
        x = false;
    }
    else{
        document.getElementById("matkhaumoi").type="password";
        x = true;
    }
}
function myeye3(){
    if(x==true){
        document.getElementById("xacnhan").type="text";
        x = false;
    }
    else{
        document.getElementById("xacnhan").type="password";
        x = true;
    }
}
function doimatkhau(){
    var matkhaucu = document.getElementById("matkhaucu").value;
    var matkhaumoi = document.getElementById("matkhaumoi").value;
    var xacnhan = document.getElementById("xacnhan").value;
    if(matkhaucu == ""){
        document.getElementById("errormatkhaucu").innerHTML="Trường này bắt buộc";
    }
    else{
        document.getElementById("errormatkhaucu").innerHTML="";
    }
    if(matkhaumoi == ""){
        document.getElementById("errormatkhaumoi").innerHTML="Trường này bắt buộc";
    }
    else{
        document.getElementById("errormatkhaumoi").innerHTML="";
    }
    if(xacnhan == ""){
        document.getElementById("errorxacnhan").innerHTML="Trường này bắt buộc";
    }
    else{
        document.getElementById("errorxacnhan").innerHTML="";
    }
    if(matkhaucu && matkhaumoi && xacnhan){
        alert("Đổi mật khẩu thành công");
        document.getElementById("matkhaucu").value="";
        document.getElementById("matkhaumoi").value="";
        document.getElementById("xacnhan").value="";
    }
}
function quaylai(){
    var matkhaucu = document.getElementById("matkhaucu").value;
    var matkhaumoi = document.getElementById("matkhaumoi").value;
    var xacnhan = document.getElementById("xacnhan").value;
    if(matkhaucu==""&& matkhaumoi=="" && xacnhan=="")
    {
        window.location="./profile.html";
    }
}
//lay vi tri hien tai cua header
pos = $('#wrap-header').position();
            
$(window).scroll(function(){
    var posScroll = $(document).scrollTop();
    if(parseInt(posScroll) > parseInt(pos.top)){
        $('#wrap-header').addClass('fixed');
    }
    else{
        $('#wrap-header').removeClass('fixed');
    }
});