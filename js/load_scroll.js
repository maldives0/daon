$(function () {
  //start
  $('header').load('header_footer.html .head', header);
  $('footer').load('header_footer.html footer .foot', footer);

  //header
  function header() {
    let resMsg;

    function nav() {
      $('.head nav div').on({
        click: mEvent,
        mouseenter: mEvent,
        mouseleave: mEvent,
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
    const mq = window.matchMedia('screen and (max-width:576px)');

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
  function footer() {
    //start

    //scroll

    const main = document.querySelector('main');
    const mDiv = document.querySelectorAll('main .main');
    const len = mDiv.length;

    let pArr = [];
    const last = document.querySelector('.roommap');
    const lTop = last.offsetTop;

    const sList = document.querySelectorAll('.sidebar li');
    const sEle = document.querySelector('.service');
    const sTop = sEle.offsetTop;
    const serviceDiv = sEle.querySelector('article div');
    const serviceUl = sEle.querySelector('article .service_list');
    let pos = 0;
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
          } catch {
            alert('마지막 페이지입니다');
            if (idx >= len - 1) {
              pos = this.offsetTop;
            }
          }
        } else {
          try {
            pos = this.previousElementSibling.offsetTop;
            sList[idx].classList.remove('active');
            sList[idx].previousElementSibling.classList.add('active');
          } catch {
            if (idx == 0) {
              pos = mDiv[0].offsetTop;
            }
          }
        }

        //service fade

        if (sTop == pos) {
          serviceDiv.classList.add('fade');
          serviceUl.classList.add('fade');
        }

        if (lTop == pos) {
          $('footer .foot').addClass('active');
          $('.scroll').addClass('active');
        } else {
          $('footer .foot').removeClass('active');
          $('.scroll').removeClass('active');
        }

        main.style.transform = 'translateY(-' + pos + 'px)';
      }
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
      const thisParent = a.currentTarget.parentElement;

      const thisChildren = thisParent.children;

      let i = Array.from(thisChildren).indexOf(a.currentTarget);

      if (sTop == pArr[i]) {
        serviceDiv.classList.add('fade');
        serviceUl.classList.add('fade');
      }
      if (lTop == pArr[i]) {
        $('footer .foot').addClass('active');
        $('.scroll').addClass('active');
      } else {
        $('footer .foot').removeClass('active');
        $('.scroll').removeClass('active');
      }

      main.style.transform = 'translateY(-' + pArr[i] + 'px)';
    }

    //end
  }
});
