window.addEventListener('DOMContentLoaded', function () {
  var ulLove = document.querySelector('.room_l');
  var ulOnly = document.querySelector('.room_o');

  var idx = 0;

  //li create
  for (var i = 0; i < 10; i++) {
    ulLove.innerHTML += '<li id=' + i + '></li>';
    ulOnly.innerHTML += '<li id=' + i + '></li>';
  }
  var liLove = document.querySelectorAll('.room_l li');
  var liOnly = document.querySelectorAll('.room_o li');

  //li style
  liLove.forEach(function (a, i) {
    var back =
      "background:url('img/sub/l_" +
      (i + 1) +
      ".jpg') center /100% 100% no-repeat;";
    var left = 'top:' + 100 * i + '%;';

    a.style = back + left;
  });
  liOnly.forEach(function (a, i) {
    var back =
      "background:url('img/sub/r_" +
      (i + 1) +
      ".jpg') center /100% 100% no-repeat;";
    var left = 'top:' + 100 * i + '%;';

    a.style = back + left;
  });
  //slide
  var lenL = liLove.length;

  function loveFun() {
    callBack();

    pos = 'top:' + -100 * idx + '%;';

    ulLove.style = pos;
  }
  function onlyFun() {
    callBack();

    pos = 'top:' + -100 * idx + '%;';
    ulOnly.style = pos;
  }
  function callBack() {
    if (idx >= lenL) {
      idx = 0;
    }
    if (idx < 0) {
      idx = lenL - 1;
    }
  }

  //btn

  var pos;

  $('.love .s_btn a').on('click', lClick);
  $('.only .s_btn a').on('click', oClick);
  function lClick() {
    var idx = $(this).index();

    if (idx == 0) {
      upL();
    } else {
      downL();
    }
  }

  function oClick() {
    var idx = $(this).index();
    if (idx == 0) {
      upO();
    } else {
      downO();
    }
  }

  function upL() {
    idx--;
    loveFun();
  }
  function downL() {
    idx++;
    loveFun();
  }
  function upO() {
    idx--;

    onlyFun();
  }
  function downO() {
    idx++;

    onlyFun();
  }
});
