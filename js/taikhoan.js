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


var x = true;
function myeye(){
    if(x){
        document.getElementById("password").type="text";
        x = false;
    }
    else{
        document.getElementById("password").type="password";
        x = true;
    }
}
function dangnhap(){
    var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    if(user == ""){
        document.getElementById("erroruser").innerHTML="VUI LÒNG NHẬP EMAIL/SĐT";
    }
    else{
        document.getElementById("erroruser").innerHTML="";
    }
    if(password == ""){
        document.getElementById("errorpassword").innerHTML="VUI LÒNG NHẬP PASSWORD";
    }
    else{
        document.getElementById("errorpassword").innerHTML="";
    }
    if(user && password){
        window.location="./Sach.html";
    }
}

function boqua(){
    var user = document.getElementById("user").value;;
    var password= document.getElementById("password").value;;
    if(user==""&& password=="")
    {
        window.location="./Sach.html";
    }
}
