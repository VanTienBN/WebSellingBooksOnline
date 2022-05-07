
function doithongtin(){
    var hoten = document.getElementById("hoten").value;
    var ngaysinh = document.getElementById("ngaysinh").value;
    var dienthoai = document.getElementById("dienthoai").value;
    var email = document.getElementById("email").value;
    var tinh = document.getElementById("tinhthanhpho").value;
    var quanhuyen = document.getElementById("quanhuyen").value;
    var diachi = document.getElementById("diachi").value;
    if(hoten == ""){
        document.getElementById("errorhoten").innerHTML="Trường này bắt buộc";
    }
    else{
        document.getElementById("errorhoten").innerHTML="";
    }
    if(ngaysinh == ""){
        document.getElementById("errorngaysinh").innerHTML="Trường này bắt buộc";
    }
    else{
        document.getElementById("errorngaysinh").innerHTML="";
    }
    if(dienthoai == ""){
        document.getElementById("errordienthoai").innerHTML="Trường này bắt buộc";
    }
    else{
        document.getElementById("errordienthoai").innerHTML="";
    }
    if(email == ""){
        document.getElementById("erroremail").innerHTML="Trường này bắt buộc";
    }
    else{
        document.getElementById("erroremail").innerHTML="";
    }
    if(tinh == ""){
        document.getElementById("errortinh").innerHTML="Trường này bắt buộc";
    }
    else{
        document.getElementById("errortinh").innerHTML="";
    }
    if(quanhuyen == ""){
        document.getElementById("errorquan").innerHTML="Trường này bắt buộc";
    }
    else{
        document.getElementById("errorquan").innerHTML="";
    }
    if(diachi == ""){
        document.getElementById("errordiachi").innerHTML="Trường này bắt buộc";
    }
    else{
        document.getElementById("errordiachi").innerHTML="";
    }
    if(hoten && ngaysinh && dienthoai && email && tinh && quanhuyen && diachi){
        alert("Sửa thông tin thành công");
        document.getElementById("hoten").value="";
        document.getElementById("ngaysinh").value="";
        document.getElementById("dienthoai").value="";
        document.getElementById("email").value="";
        document.getElementById("tinhthanhpho").value="";
        document.getElementById("quanhuyen").value="";
        document.getElementById("diachi").value="";
    }
}
function quaylai(){
    var hoten = document.getElementById("hoten").value;
    var ngaysinh = document.getElementById("ngaysinh").value;
    var dienthoai = document.getElementById("dienthoai").value;
    var email = document.getElementById("hoten").value;
    var tinh = document.getElementById("tinhthanhpho").value;
    var quanhuyen = document.getElementById("quanhuyen").value;
    var diachi = document.getElementById("diachi").value;
    if(hoten=="" && ngaysinh=="" && dienthoai=="" && email=="" && tinh=="" && quanhuyen=="" && diachi=="")
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