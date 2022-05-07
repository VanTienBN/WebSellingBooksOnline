$(document).ready(function(){
  var stt = 0;
  startImg =$("img.slide:first").attr("stt");
  startTitle =$("div.title:first").attr("stt");
  endImg=$("img.slide:last").attr("stt");
  endTitle =$("div.title:last").attr("stt");
  $("img.slide","div.title").each(function(){
    if($(this).is('.visiable'))
      stt=$ (this).attr("stt");
  });
  $("#next").click(function(){
    if(stt == endImg){
      stt = -1;
    }
    next = ++stt;
    $("div.title").hide();
    $("div.title").eq(next).show();
    $("img.slide").hide();
    $("img.slide").eq(next).show();
  });
  $("#prev").click(function(){
    if(stt == 0){
      stt = endImg;
      prev = stt ++;
    }
    prev = --stt;
    $("div.title").hide();
    $("div.title").eq(prev).show();
    $("img.slide").hide();
    $("img.slide").eq(prev).show();
  });
  setInterval(function(){
    $("#next").click();
  },3000);
});