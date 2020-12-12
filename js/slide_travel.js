window.addEventListener('DOMContentLoaded', function () {

    var figBox = document.querySelector('article');
    var figEle = figBox.querySelectorAll('figure');

    var idx = 0, pos, move, resMsg;

    var len = figEle.length / 3;
    var len2 = figEle.length;

    //mq
    var mq = window.matchMedia("screen and (max-width:576px)");

    mq.addEventListener('change', res);

    function res(e) {

        if (e.matches) {
            console.log('mobile')
            resMsg = 'mobile';
        } else {
            console.log('pc')
            resMsg = 'pc';

        }

    }
    res(mq);

    //fig style
    figEle.forEach(function (a, i) {

        if (resMsg == 'pc') {
            pos = "left:" + 350 * i + "px;";
        }
        else {
            pos = "left:" + (350 * i) + "px;";
        }

        a.style = pos;

    });

    //slide

    function aniFun() {

        if (resMsg == 'pc') {
            callBack();
            move = "left:" + (-1050 * idx) + "px;";
        }
        else {
            callBack2();
            move = "left:" + (-350 * idx) + "px;";
        }


        figBox.style = move;


    };
    function callBack() {
        if (idx >= len) {
            idx = 0;

        }
        if (idx < 0) {
            idx = Math.floor(len);

        }
    };
    function callBack2() {
        if (idx >= len2) {
            idx = 0;

        }
        if (idx < 0) {
            idx = Math.floor(len2) - 1;

        }
    };



    //btn
    var aBtn = document.querySelectorAll('.a_btn a');
    var pos;


    aBtn[0].addEventListener('click', prev);
    aBtn[1].addEventListener('click', next);

    function prev() {

        idx--;
        aniFun();

    };
    function next() {

        idx++;
        aniFun();

    };





    //end
});
