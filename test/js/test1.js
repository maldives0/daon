window.addEventListener('DOMContentLoaded', function () {
      var main = document.querySelector('main');
      var mDiv = document.querySelectorAll('main .main');
    
      var pos = 0;
      var pArr = [];
     
     
      mDiv.forEach(function (el, idx) {
            pArr.push(el.offsetTop);
           
            //mouse wheel
            el.addEventListener('mousewheel', mouse);
            function mouse(e) {
                  window.scrollTo(0, 0);
                  if (e.wheelDelta < 0) {
                        try {
                             
                              pos = this.nextElementSibling.offsetTop;
                              
                              $('.side li')[idx].classList.remove('active');
                              $('.side li')[idx].nextElementSibling.classList.add('active');
                        } catch{ }


                  } else {
                        try {
                              pos = this.previousElementSibling.offsetTop;
                              $('.side li')[idx].classList.remove('active');
                              $('.side li')[idx].previousElementSibling.classList.add('active');
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
    
















});