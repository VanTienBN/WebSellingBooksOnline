let perPage = 6;
let idPage = 1;
let start = 0;
let end = perPage;


const product = [
        { id: item-1, image: "https://307a0e78.vws.vegacdn.vn/view/v2/image/img.book/0/0/0/431.jpg?v=2&w=200&h=292.jpg", title1: "Ảnh hậu tái <br>sinh (Tập 1)" ,title2:"Steven S. Little",title3:"120 votes", title4:"Ảnh hậu tái sinh là<br>một trong những<br>tác phẩm ngôn tình ",title5:"1,400 lượt xem"},
        { id: item-2, image: "https://307a0e78.vws.vegacdn.vn/view/v2/image/img.book/0/0/0/4041.jpg?v=2&w=200&h=292", title1: "Ảnh hậu tái <br>sinh (Tập 1)" ,title2:"Steven S. Little",title3:"120 votes", title4:"Ảnh hậu tái sinh là<br>một trong những<br>tác phẩm ngôn tình ",title5:"1,400 lượt xem" },
        { id: item-3, image: "https://307a0e78.vws.vegacdn.vn/view/v2/image/img.audio_book/0/0/0/203.jpg?v=2&w=140&h=205", title1: "Ảnh hậu tái <br>sinh (Tập 1)" ,title2:"Steven S. Little",title3:"120 votes", title4:"Ảnh hậu tái sinh là<br>một trong những<br>tác phẩm ngôn tình ",title5:"1,400 lượt xem"},
        { id: item-4, image: "https://307a0e78.vws.vegacdn.vn/view/v2/image/img.book/0/0/0/25794.jpg?v=1&w=200&h=292", title1: "Ảnh hậu tái <br>sinh (Tập 1)" ,title2:"Steven S. Little",title3:"120 votes", title4:"Ảnh hậu tái sinh là<br>một trong những<br>tác phẩm ngôn tình ",title5:"1,400 lượt xem" },
        { id: item-5, image: "https://307a0e78.vws.vegacdn.vn/view/v2/image/img.comic/0/0/0/290.jpg?v=6&w=365&h=540", title1: "Ảnh hậu tái <br>sinh (Tập 1)" ,title2:"Steven S. Little",title3:"120 votes", title4:"Ảnh hậu tái sinh là<br>một trong những<br>tác phẩm ngôn tình ",title5:"1,400 lượt xem" },
        { id: item-6, image: "https://307a0e78.vws.vegacdn.vn/view/v2/image/img.book/0/0/0/24480.jpg?v=1&w=340&h=497", title1: "Ảnh hậu tái <br>sinh (Tập 1)" ,title2:"Steven S. Little",title3:"120 votes", title4:"Ảnh hậu tái sinh là<br>một trong những<br>tác phẩm ngôn tình ",title5:"1,400 lượt xem" },
}

function renderProduct(product) {
    html = '';
    const content = product.map((item, index) => {
        if (index >= start && index < end) {
            html += '<div class="box-item" id="item-1">';
            html += '<div class="img">';
            html += '<a>';
            html += '<img src=' + item.image + '>';
            html += '</a>';
            html += '</div>';
            html += '<div class="content" >';
            html += '<a>'+ item.title1 + '</a>';
            html += '<p>'+item.title2+'</p>';
            html += '<a>'+ item.title3 + '</a>';
            html += '<p>'+item.title4+'</p>';
            html += '<p>'+item.title5+'</p>';
            html += '</div>';
            html += '</div>';
            return html;
        }
    });
    document.getElementsByClassName("list-product").innerHTML = html;
    highlightText();
}
renderProduct()
    