window.addEventListener('DOMContentLoaded', function () {

      var figBox = document.querySelector('article');
      var figEle = figBox.querySelectorAll('figure');
   
      var idx = 0;
  
  
   
   
   var len =figEle.length/3;
  
      //fig style
      figEle.forEach(function (a, i) {
        
          var left = "left:" + 350 * i + "px;";
  
          a.style =  left;
  
      });
    
      //slide
  
      function aniFun() {
        callBack();
        console.log(idx)
          pos = "left:" + (-1050 * idx) + "px;";
         figBox.style = pos;
         
         
      };
      function callBack() {
          if (idx >= len) {
              idx = 0;
            
          }
          if (idx < 0) {
              idx = Math.floor(len) ;
           
          }
      };
     
  
  
      //btn
      var aBtn = document.querySelectorAll('.a_btn a');
      var pos;
  
  
      aBtn[0].addEventListener('click', prev);
      aBtn[1].addEventListener('click', next);
  
      function prev() {
        
          idx--;
          aniFun();
  
      };
      function next() {
        
          idx++;
          aniFun();
  
      };
  
   
  });