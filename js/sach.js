
   
    $(document).ready(function (){

        var slideIndex = 0;
        showSlides(slideIndex);
        
        function showSlides(n) {
          var i;
          var slides = document.getElementsByClassName("mySlides");
          if (n > slides.length) {slideIndex = 1}
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";
          }
          slides[slideIndex-1].style.display = "block";
        }
        
        var slideIndex = 0;
            showSlides();

            function showSlides() {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}
            slides[slideIndex-1].style.display = "block";
            setTimeout(showSlides, 2500); 
            }
        
        function increaseImage() {
            ++slideIndex;
            var slides = document.getElementsByClassName("mySlides");
            if(slideIndex > slides.length) 
            {
                slideIndex = 1;
            }
        }
        function decreaseImage() {
            --slideIndex;
            var slides = document.getElementsByClassName("mySlides");
            if(slideIndex < 1) 
            {
                slideIndex = slides.length;
            }   
        }
        $('#prev').on('click', function(){
            $('#im_' + slideIndex).stop().fadeOut(1);
            decreaseImage();
            $('#im_' + slideIndex).stop().fadeIn(1);
        });
        $('#next').on('click', function(){
            $('#im_' + slideIndex).stop().fadeOut(1);
            increaseImage();
            $('#im_' + slideIndex).stop().fadeIn(1);
        });

//---------------------------scroll----------------------------
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
//---------------------------scroll----------------------------
        $(window).scroll(function(){
            if($(this).scrollTop() > 100){
                $('.on_top').fadeIn();
            }
            else{
                $('.on_top').fadeOut();
            }
        });
        $('.on_top').click(function(){
            $("html,body").animate({scrollTop : 0},1000);
            return false;
        });
});