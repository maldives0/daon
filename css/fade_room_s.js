


window.addEventListener('DOMContentLoaded', function () {

   
    var roomDiv = document.querySelector('.room');
    var ulEle = roomDiv.querySelector('.r_list');
    
    //li tag create
    for (var i = 0; i < 9; i++) {
        ulEle.innerHTML += "<li class='p" + i + " ban'></li>";
        };
        var liEle =  ulEle.querySelectorAll('.ban');
   
        liEle.forEach(function (a, i) {
            var back = "background:url('img/sub/l_" + (i + 1) + ".jpg') center /100% 100% no-repeat;";
                 
            a.style = back ;
        
          });
  
    //fade
    
    $('.r_list').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000
      });

 
    

});





















