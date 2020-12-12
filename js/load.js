

$(function () {
    //start
    $('header').load('daon_header_footer.html .head', header);
    $('footer').load('daon_header_footer.html footer .foot');

    function header() {


        var resMsg;

        function nav() {

            $('.head nav div').on({
                click: mEvent,
                mouseenter: mEvent,
                mouseleave: mEvent
            });
            //nav toggle

            $('.head .menu-trigger').on('click', function () {
                $(this).toggleClass('active');
                $('nav').toggleClass('active');
            });



            function mEvent(e) {


                if (resMsg == 'pc') {

                    if (e.type == 'mouseenter') {

                        $(this).find('ul').stop().slideDown();
                    }
                } else {
                    if (e.type == 'click') {
                        $(this).find('ul').stop().slideDown();
                    }

                }
                if (e.type == 'mouseleave') {
                    $(this).find('ul').stop().slideUp();
                }


                //m end
            }
            //nav
        }
        nav();
        var mq = window.matchMedia("screen and (max-width:576px)");

        mq.addEventListener('change', res);
        function res(e) {
            if (e.matches) {
                resMsg = 'mobile';

            } else {
                resMsg = 'pc';
            }

        }
        res(mq);
    }

})
