var btndangkyngay=document.getElementById("dangkyngay");
var dangkyngay=document.getElementsByClassName("modal-dangkyngay");
var close = document.getElementsByClassName("close")[0];
var thanhtoan=document.getElementsByClassName("thanhtoan");
$("#dangkyngay").click(function() { return false; });
function hienthi() {
    if(window.getComputedStyle(document.querySelector(".modal-dangkyngay")).dislay ==="block"){
      document.querySelector(".modal-dangkyngay").style.display ="none";
    }
    else{
      document.querySelector(".modal-dangkyngay").style.display ="block";
    }
}

close.onclick = function () {
    dangkyngay.style.display = "none";
  }
window.onclick = function (event) {
    if (event.target == dangkyngay) {
      dangkyngay.style.display = "none";
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

