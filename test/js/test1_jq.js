window.addEventListener('DOMContentLoaded', function () {
  
           
     $('main .main').each(function(el,idx){
        var pos=0;
        console.log(idx)
        $(idx).on('mousewheel',mw);
           function mw(e){
               
           var ws= $(window).scrollTop();
           
          var d = e.originalEvent.wheelDelta;
        
            if(d<0){
                
                  pos=$(this).next().offset().top;
                
                  
            }
            else{
                 pos=$(this).prev().offset().top;
                
            }

            $('.main').css(
                  {
                   transform:'translateY(-'+pos+'px)'
                  }
            );
           };
         
         
     });















});