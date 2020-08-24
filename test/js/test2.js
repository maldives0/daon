window.addEventListener('DOMContentLoaded', function () {

    var about = document.querySelector('.about');
    var ulEle = about.querySelector('.v_list');

    var liEle;

    var idx = 0;

    //li tag create
    for (var i = 0; i < 10; i++) {
        ulEle.innerHTML += "<li class='p" + i + "'></li>";
        liEle = ulEle.querySelectorAll('li');

    };
    var len = liEle.length;

    //li style
    liEle.forEach(function (a, i) {
        var back = "background:url('../img/sub/v_" + (i + 1) + ".jpg') center 0px no-repeat;";
        var left = "left:" + 100 * i + "%;";

        a.style = back + left;

    });
    //slide

    function aniFun() {
        pos = "left:" + (-100 * idx) + "%;";
        ulEle.style = pos;
        callBack();
        white(idx);

    };
    function callBack() {
        if (idx == len) {
            idx = 0;
            pos = "left:" + (-100 * idx) + "%;";
            ulEle.style = pos;
        }
        if (idx == -1) {
            idx = len - 1;
            pos = "left:" + (-100 * idx) + "%;";
            ulEle.style = pos;
        }
    };
    //clone
    // var first = document.getElementsByClassName('#p0');
    // console.log(first)
    // ulEle.appendChild();
    // var first = $('.v_list li:first').clone();
    //     var last =  $('.v_list li:last').clone();
    //    $('.v_list').prepend(last);
    // $('.v_list').append(first);



    //btn
    var aBtn = document.querySelectorAll('.a_btn a');
    var pos;


    aBtn[0].addEventListener('click', prev);
    aBtn[1].addEventListener('click', next);

    function prev() {
        indiA[idx].classList.remove('active');
        idx--;
        aniFun();

    };
    function next() {
        indiA[idx].classList.remove('active');
        idx++;
        aniFun();

    };

    //indi
    var indiUl = about.querySelector('.indi');


    // 
    for (var i = 0; i < len; i++) {

        indiUl.innerHTML += "<a data-num='" + i + "'></a>";
    };
    var indiA = indiUl.querySelectorAll('a');

    indiA[0].classList.add('active');
    indiA.forEach(function indi(a) {


        a.addEventListener('click', click);
    });

    function white() {
        for (var i = 0; i < len; i++) {
            indiA[i].classList.remove('active');
        };
        indiA[idx].classList.add('active');
    }
    
    function click() {
        for (var i = 0; i < len; i++) {
            indiA[i].classList.remove('active');
        };
        this.classList.add('active');
        var aI = this.dataset.num;
        pos = "left:" + (-100 * aI) + "%;";
        ulEle.style = pos;
    };

});