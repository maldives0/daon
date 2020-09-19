$(function () {
    //start
    $('header').load('daon_header_footer.html .head', header);
    $('footer').load('daon_header_footer.html footer .foot', footer);
    //end

    function header() {


        var resMsg;

        function nav(){

            $('.head nav div').on({
                click: mEvent,
                mouseenter: mEvent,
                mouseleave:mEvent
            });
                //nav toggle

                $('.head .menu-trigger').on('click', function(){
                    $(this).toggleClass('active');
                    $('nav').toggleClass('active');
                              });



            function mEvent(e){


               if(resMsg == 'pc'){

                   if(e.type == 'mouseenter'){

                    $(this).find('ul').stop().slideDown();
                   }
               }else{
                   if(e.type == 'click'){
                    $(this).find('ul').stop().slideDown();
                   }

               }
               if(e.type == 'mouseleave'){
                $(this).find('ul').stop().slideUp();
               }


                //m end
            }
            //nav
        }
        nav();
        var mq = window.matchMedia("screen and (max-width:480px)");

        mq.addListener(res);
       function res(e) {
           if (e.matches) {
               resMsg = 'mobile';

           } else {
               resMsg = 'pc';
           }

       }
       res(mq);
}
    function footer() {
        //start

        //scroll

            var main = document.querySelector('main');
            var mDiv = document.querySelectorAll('main .main');
            var len = mDiv.length;
            var pos = 0;
            var pArr = [];
            var last = document.querySelector('.roommap');
            var lTop = last.offsetTop;

            var sEle = document.querySelector('.service');

            var sDiv = sEle.querySelector('article div');
            var sUl = sEle.querySelector('article .s');
            var sTop = sEle.offsetTop;

            var sList = document.querySelectorAll('.side li');

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



                    //service fade



                    if (sTop == pos) {
                        sDiv.classList.add('fade');
                        sUl.classList.add('fade');
                    }

                    if (lTop == pos) {

                        $('footer .foot').addClass('active');
                        $('.scroll').addClass('active');

                    }else{
                        $('footer .foot').removeClass('active');
                        $('.scroll').removeClass('active');

                    }

                    main.style.transform = "translateY(-" + pos + "px)";
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


                if (sTop == pArr[i]) {
                    sDiv.classList.add('fade');
                    sUl.classList.add('fade');
                }
                if (lTop == pArr[i]) {
                    $('footer .foot').addClass('active');
                    $('.scroll').addClass('active');
                }else{
                    $('footer .foot').removeClass('active');
                    $('.scroll').removeClass('active');
                }

                main.style.transform = "translateY(-" + pArr[i] + "px)";



            };



        //end
    }
})