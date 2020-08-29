
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
    var sEle = document.querySelector('.service');
    var sDiv = sEle.querySelector('article div');
    var sUl = sEle.querySelector('article .s');
    var sTop = sEle.offsetTop;
    
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
//fade

                if(sTop == pos){
                    sDiv.classList.add('fade');
                    sUl.classList.add('fade');
                }
          };
    });

    //sidebar click
    $('.side li')[0].classList.add('active');
    $('.side li').on('click', lc);
    function lc(a) {

          $('.side li').removeClass('active');
          $(this).addClass('active');
          var i = $(this).index();
        console.log(i)
          main.style.transform = "translateY(-" + pArr[i] + "px)";
//fade

if(sTop == pArr[i]){
      sDiv.classList.add('fade');
      sUl.classList.add('fade');
  }

    };






   
});
