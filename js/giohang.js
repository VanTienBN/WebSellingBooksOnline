function tieptucmuahang(){
    window.location.href="./Sach.html"
}
function updatecart(){
    var cart_item = document.getElementsByClassName("cart-items")[0];
    var cart_rows = cart_item.getElementsByClassName("cart-row");
    var total = 0;
    for (var i = 0; i < cart_rows.length; i++) {
      var cart_row = cart_rows[i]
      var gia= cart_row.getElementsByClassName("dongia")[0];
      var soluong = cart_row.getElementsByClassName("soluong-input")[0];
      var dongia = parseFloat(gia.innerText)// chuyển một chuổi string sang number để tính tổng tiền.
      var tongsoluong = soluong.value // lấy giá trị trong thẻ input
      total = total + (dongia * tongsoluong)
    }
    document.getElementsByClassName("cart-total-price")[0].innerText = total + 'VNĐ'
    // Thay đổi text = total trong .cart-total-price. Chỉ có một .cart-total-price nên mình sử dụng [0].  
}
//thay đổi số lượng
    var soluong_input = document.getElementsByClassName("soluong-input");
    for (var i = 0; i < soluong_input.length; i++) {
        var input = soluong_input[i];
        input.addEventListener("change", function (event) {
        var input = event.target
        updatecart()
        })
    }
function xoa(){
    var xoa=document.getElementsByClassName("xoa");
    for (var i = 0; i < xoa.length; i++) {
        var button = xoa[i]
        button.addEventListener("click", function () {
            var button_remove = event.target
            button_remove.parentElement.parentElement.remove()
            updatecart();
        })
        
    }
}
function thanhtoan(){
    alert("Cảm ơn bạn đã mua hàng")
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