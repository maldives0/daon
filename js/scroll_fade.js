
//nav toggle
window.addEventListener('DOMContentLoaded', function () {
      var mTri = document.querySelector('.menu-trigger');

      var nav = document.querySelector('header nav');

      mTri.addEventListener('click',
            function () {
                  mTri.classList.toggle('active');
                  nav.classList.toggle('active');

            });



});
//scroll
window.addEventListener('DOMContentLoaded', function () {
      var main = document.querySelector('main');
      var mDiv = document.querySelectorAll('main .main');
      var len = mDiv.length;
      var pos = 0;
      var pArr = [];
      var sEle = document.querySelector('.service');
      var rEle = document.querySelector('.rooms');
      var sDiv = sEle.querySelector('article div');
      var sUl = sEle.querySelector('article .s');
      var sTop = sEle.offsetTop;
      var rTop = rEle.offsetTop;

      var sList = document.querySelectorAll('.side li');
      var rooms = document.querySelector('.rooms');
      var roomDiv = rooms.querySelector('.room');
      var ulEle = roomDiv.querySelector('.r_list');

      var liEle;
      var blen = false;

      //rooms fade
      var loop;
      var num = 0;
      $('.r_list li').not(':first').hide();
      //li tag create
      for (var i = 0; i < 9; i++) {
            ulEle.innerHTML += "<li class='p" + i + "'></li>";
            liEle = ulEle.querySelectorAll('li');

      };
      var lenR = liEle.length;

      //li style
      liEle.forEach(function (a, i) {
            var back = "background:url('img/sub/r_" + (i + 1) + ".jpg') center /100% 100% no-repeat;";

            a.style = back;

      });

      //indi create a
      var indiUl = roomDiv.querySelector('.indi');



      for (var i = 0; i < lenR; i++) {

            indiUl.innerHTML += "<a data-num='" + i + "'></a>";
      };
      var indiA = indiUl.querySelectorAll('a');

      indiA[0].classList.add('active');
    




      //scroll
      mDiv.forEach(function (el, idx) {
            pArr.push(el.offsetTop);

            //mouse wheel
            el.addEventListener('mousewheel', mouse);
            function mouse(e) {
                  window.scrollTo(0, 0);

                  if (e.wheelDelta < 0) {
                        try {

                              pos = this.nextElementSibling.offsetTop;

                              sList[idx].classList.remove('active');
                              sList[idx].nextElementSibling.classList.add('active');
                        } catch{

                              if (idx == len - 1) {
                                    pos = mDiv[len - 1].offsetTop;
                              }
                        }


                  } else {
                        try {
                              pos = this.previousElementSibling.offsetTop;
                              sList[idx].classList.remove('active');
                              sList[idx].previousElementSibling.classList.add('active');
                        } catch{
                              if (idx == 0) {
                                    pos = mDiv[0].offsetTop;
                              }
                        }
                  }

                  main.style.transform = "translateY(-" + pos + "px)";

                  //service fade



                  if (sTop == pos) {
                        sDiv.classList.add('fade');
                        sUl.classList.add('fade');
                  }
                  if (rTop == pos) {

                        blen = true;

                  } else{

                        blen = false;
                  }
                  if (blen) {

                        //btn
                        $('.a_btn a').on('click', aBtn);
            
                        function aBtn() {
            
                              if ($(this).index() == 0) {
            
                                    fade('prev');
            
                              } else {
            
                                    fade('next');
            
                              }
            
                        };
            
                        //fade
            
                        function fade(p) {
            
            
                              $('.r_list li').eq(num).fadeOut(2000);
            
                              (p == 'prev') ? num-- : num++;
                              update();
                              $('.r_list li').eq(num).fadeIn(2000);
            
                              white(num);
                        };
            
                        function update() {
            
                              if (num >= lenR) num = 0;
                              if (num == -1) num = lenR - 1;
            
                        };
                        //loop
                        function clearLoop() {
                              clearInterval(loop);
                        };
                        function interLoop() {
                              loop = setInterval(fade, 3000);
                        };
                        interLoop();
                        //mouse acting
                        $('.r_list li, .a_btn, .indi').on(
                              {
                                    mouseenter: clearLoop,
                                    mouseleave: interLoop
                              }
                        );
            
            
            
            
                        function white(num) {
                              for (var i = 0; i < lenR; i++) {
                                    indiA[i].classList.remove('active');
                              };
                              indiA[num].classList.add('active');
            
                        }
                        indiA.forEach(function indi(a) {

                              a.addEventListener('click', cIndi);
                        });
                  
            
                        function cIndi() {
                              for (var i = 0; i < lenR; i++) {
                                    indiA[i].classList.remove('active');
                              };
                              this.classList.add('active');
                              var idx = this.dataset.num;
            
                              $('.r_list li').fadeOut(2000);
            
                              $('.r_list li').eq(idx).fadeIn(2000);
            
                              num = Number(idx);
                              setTimeout(function () {
                                    fade();
                              }, 2000);
                        };//end
            
                  };
            
            };

      });





      //sidebar click
      sList[0].classList.add('active');

      sList.forEach(function (el) {
            el.addEventListener('click', lc);
      });

      function lc(a) {
            sList.forEach(function (e) {
                  e.classList.remove('active');

            });
            this.classList.add('active');
            var thisParent = a.currentTarget.parentElement;

            var thisChildren = thisParent.children;

            var i = Array.from(thisChildren).indexOf(a.currentTarget);

            main.style.transform = "translateY(-" + pArr[i] + "px)";
            if (sTop == pArr[i]) {
                  sDiv.classList.add('fade');
                  sUl.classList.add('fade');
            }

            if (rTop == pArr[i]) {
                  blen = true;
            } else{
                  blen = false;
                 
            }
           
            if (blen) {

                  //btn
                  $('.a_btn a').on('click', aBtn);
      
                  function aBtn() {
      
                        if ($(this).index() == 0) {
      
                              fade('prev');
      
                        } else {
      
                              fade('next');
      
                        }
      
                  };
      
                  //fade
      
                  function fade(p) {
      
      
                        $('.r_list li').eq(num).fadeOut(2000);
      
                        (p == 'prev') ? num-- : num++;
                        update();
                        $('.r_list li').eq(num).fadeIn(2000);
      
                        white(num);
                  };
      
                  function update() {
      
                        if (num >= lenR) num = 0;
                        if (num == -1) num = lenR - 1;
      
                  };
                  //loop
                  function clearLoop() {
                        clearInterval(loop);
                  };
                  function interLoop() {
                        loop = setInterval(fade, 3000);
                  };
                  interLoop();
                  //mouse acting
                  $('.r_list li, .a_btn, .indi').on(
                        {
                              mouseenter: clearLoop,
                              mouseleave: interLoop
                        }
                  );
      
      
      
      
                  function white(num) {
                        for (var i = 0; i < lenR; i++) {
                              indiA[i].classList.remove('active');
                        };
                        indiA[num].classList.add('active');
      
                  }
                  indiA.forEach(function indi(a) {

                        a.addEventListener('click', cIndi);
                  });
            
      
                  function cIndi() {
                        for (var i = 0; i < lenR; i++) {
                              indiA[i].classList.remove('active');
                        };
                        this.classList.add('active');
                        var idx = this.dataset.num;
      
                        $('.r_list li').fadeOut(2000);
      
                        $('.r_list li').eq(idx).fadeIn(2000);
      
                        num = Number(idx);
                        setTimeout(function () {
                              fade();
                        }, 2000);
                  };//end
      
            };
      


      };

     


     

    






});







