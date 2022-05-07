var x = true;
function myeye(){
    if(x==true){
        document.getElementById("password").type="text";
        x = false;
    }
    else{
        document.getElementById("password").type="password";
        x = true;
    }
}
function dangky(){
    var user = document.getElementById("user").value;;
    var maxacnhan= document.getElementById("maxacnhan").value;;
    var password= document.getElementById("password").value;;
    if(user == ""){
        document.getElementById("erroruser").innerHTML="VUI LÒNG NHẬP EMAIL/SĐT";
    }
    else{
        document.getElementById("erroruser").innerHTML="";
    }
    if(maxacnhan == ""){
        document.getElementById("errormaxacnhan").innerHTML="VUI LÒNG NHẬP MÃ OTP";
    }
    else{
        document.getElementById("errormaxacnhan").innerHTML="";
    }
    if(password == ""){
        document.getElementById("errorpassword").innerHTML="VUI LÒNG NHẬP MẬT KHẨU";
    }
    else{
        document.getElementById("errorpassword").innerHTML="";
    }
    if(user && maxacnhan && password){
        window.location="./Sach.html";
    } 
}
function boqua(){
    var user = document.getElementById("user").value;;
    var maxacnhan= document.getElementById("maxacnhan").value;;
    var password= document.getElementById("password").value;;
    if(user==""&& maxacnhan==""&& password=="")
    {
        window.location="./Sach.html";
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