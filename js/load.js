$(function () {
    //start
    $('header').load('daon_header_footer.html .head', header);
    $('footer').load('daon_header_footer.html footer .foot');
    //end

    function header() {
        //nav toggle
        window.addEventListener('DOMContentLoaded', function () {
            var mTri = document.querySelector('.head .menu-trigger');
           
            var nav = document.querySelector('header nav');
          
            mTri.addEventListener('click',
                function () {
                    mTri.classList.toggle('active');
                    nav.classList.toggle('active');
                  
                });


                function nav(){
                    $('.head nav div').on({
                        click: mEvent,
                        mouseenter: mEvent,
                        mouseleave:mEvent
                    });
                   
                    function mEvent(){
                        console.log($(this))
                        $(this).find('ul').slideDown();
                        //m end
                    }
                    //nav
                }
                nav();
            

        });
    }
  
})