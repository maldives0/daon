window.addEventListener('DOMContentLoaded', function () {

    var about = document.querySelector('.about');
    var ulEle = about.querySelector('.v_list');
    var liEle;

    //li tag create
    for (var i = 0; i < 10; i++) {
        ulEle.innerHTML += "<li data-num='" + i + "'></li>";
        liEle = ulEle.querySelectorAll('li');

    };
    //li style
    liEle.forEach(function (a, i) {


        a.style = "background:url('../img/sub/v_" + (i + 1) + ".jpg') center 0px no-repeat; left:" + 100 * i + "px;";



    });
    //btn
    var aBtn = about.querySelectorAll('.a_btn a');
    //$(aBtn).on('click',btn);
    aBtn.forEach(function a(c){
        c.addEventListener('click', btn);
    });
   
    function btn(a, i) {

        if (i == 0) {
            //prev
            prev();
        } else {
            //next
            next();
        }
    }
});