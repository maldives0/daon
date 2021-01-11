window.addEventListener('DOMContentLoaded', function () {
  var about = document.querySelector('.about');
  var ulEle = about.querySelector('.v_list');

  var liEle;

  //li tag create
  for (var i = 0; i < 10; i++) {
    ulEle.innerHTML += "<li class='p" + i + "'></li>";
    liEle = ulEle.querySelectorAll('li');
  }
  var len = liEle.length;

  //li style
  liEle.forEach(function (a, i) {
    var back =
      "background:url('img/sub/v_" +
      (i + 1) +
      ".jpg') center /100% 100% no-repeat;";

    a.style = back;
  });

  var loop;
  var num = 0;
  $('.v_list li').not(':first').hide();
  //btn

  $('.arrow_btn a').on('click', aBtn);

  function aBtn() {
    if ($(this).index() == 0) {
      fade('prev');
    } else {
      fade('next');
    }
  }

  //fade

  function fade(p) {
    $('.v_list li').eq(num).fadeOut(2000);

    p == 'prev' ? num-- : num++;
    update();
    $('.v_list li').eq(num).fadeIn(2000);
    white(num);
  }
  function update() {
    if (num >= len - 1) num = 0;
    if (num == -1) num = len - 1;
  }
  //loop
  function clearLoop() {
    clearInterval(loop);
  }
  function interLoop() {
    loop = setInterval(fade, 3000);
  }
  interLoop();
  //mouse acting
  $('.v_list li, .arrow_btn, .indi').on({
    mouseenter: clearLoop,
    mouseleave: interLoop,
  });

  //indi
  var indiUl = about.querySelector('.indi');

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

    $('.v_list li').fadeOut(2000);
    $('.v_list li').eq(idx).fadeIn(2000);
    num = Number(idx);
    setTimeout(function () {
      fade();
    }, 2000);
  }
});
