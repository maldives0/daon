window.addEventListener('DOMContentLoaded', function () {
      var main = document.querySelector('main');
      var mDiv = document.querySelectorAll('main .main');
    
      var pos = 0;
      var pArr = [];
     
     
     
      $('main .main').each(function (el, idx) {
            pArr.push(el.offsetTop);
     
      });
            //mouse wheel
            $('main .main').on('mousewheel', mouse);
            function mouse(e) {
               $(window).scrollTop(0, 0);
               console.log(e.wheelDelta)
                  if (e.wheelDelta < 0) {
                        try {
                            
                              pos = $(this).next().offset().Top;
                              console.log(pos)
                              $('.side li').eq(idx).removeClass('active');
                              $('.side li').eq(idx).next().addClass('active');
                        } catch{ }


                  } else {
                        try {
                              pos = $(this).prev().offset().Top;
                              $('.side li').eq(idx).removeClass('active');
                              $('.side li').eq(idx).prev().addClass('active');
                        } catch{ }

                  }
               
        

                  main.style.transform = "translateY(-" + pos + "px)";
            };

            //sidebar click
            $('.side li')[0].classList.add('active');
            $('.side li').on('click',lc);
            function lc(a){
                  
             $('.side li').removeClass('active');
             $(this).addClass('active');
             var i = $(this).index();
           
             main.style.transform = "translateY(-" + pArr[i] + "px)";
            
                 
            };   
           
          
      
    

});