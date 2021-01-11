window.addEventListener('DOMContentLoaded', function () {
  var rooms = document.querySelector('.rooms');
  var roomDiv = rooms.querySelector('.room');
  var ulEle = roomDiv.querySelector('.r_list');

  var liEle;

  //li tag create
  for (var i = 0; i < 9; i++) {
    ulEle.innerHTML += "<li class='p" + i + "'></li>";
    liEle = ulEle.querySelectorAll('li');
  }
  var len = liEle.length;

  //li style
  liEle.forEach(function (a, i) {
    var back =
      "background:url('img/sub/r_" +
      (i + 1) +
      ".jpg') center /100% 100% no-repeat;";

    a.style = back;
  });

  var loop;
  var num = 0;
  $('.r_list li').not(':first').hide();
  //loop
  function clearLoop() {
    clearInterval(loop);
  }
  function interLoop() {
    loop = setInterval(fade, 2000);
  }
  interLoop();
  //mouse acting
  $('.r_list li, .arrow_btn, .indi').on({
    mouseenter: clearLoop,
    mouseleave: interLoop,
  });

  //btn

  $('.arrow_btn a').on('click', aBtn);

  function aBtn() {
    if ($(this).index() == 0) {
      fade('prev');
      return;
    } else {
      fade('next');
      return;
    }
  }
  //indi
  var indiUl = roomDiv.querySelector('.indi');

  for (var i = 0; i < len; i++) {
    indiUl.innerHTML += "<a data-num='" + i + "'></a>";
  }
  var indiA = indiUl.querySelectorAll('a');

  indiA[0].classList.add('active');
  indiA.forEach(function indi(a) {
    a.addEventListener('click', cIndi);
  });

  function white(num) {
    for (var i = 0; i < len; i++) {
      indiA[i].classList.remove('active');
    }
    indiA[num].classList.add('active');
  }

  function cIndi() {
    for (var i = 0; i < len; i++) {
      indiA[i].classList.remove('active');
    }
    this.classList.add('active');

    var idx = this.dataset.num;
    $('.r_list li').fadeOut();

    $('.r_list li').eq(idx).fadeIn();
    num = Number(idx);
    return;
  }

  //fade

  function fade(p) {
    $('.r_list li').eq(num).fadeOut();

    p == 'prev' ? num-- : num++;
    update();
    $('.r_list li').eq(num).fadeIn();

    white(num);
  }

  function update() {
    if (num >= len) num = 0;
    if (num == -1) num = len - 1;
  }
});
