
//scroll
window.addEventListener('DOMContentLoaded', function () {
    var main = document.querySelector('main');
    var mDiv = document.querySelectorAll('main .main');
    var pos = 0;

    var sideA = document.querySelectorAll('.side li a');
    var sArr = [];
    //side bar click

    sideA[0].classList.add('active');
    sideA.forEach(function (s,i) {
        sArr.push(i);
        s.addEventListener('click',function() {
           for(var i in sArr){
               sideA[i].classList.remove('active');
           }
           
            this.classList.add('active');
        });
       
    });
   
    //mouse wheel
    mDiv.forEach(function (el, idx) {
        el.addEventListener('mousewheel', move);
        function move(e) {
            if (e.wheelDelta < 0) {
               
                pos = this.nextElementSibling.offsetTop;
                for(var i in sArr){
                    sideA[i].classList.remove('active');
                   
                }
                sideA[idx+1].classList.add('active');
               
            } else {
               
                pos = this.previousElementSibling.offsetTop;
                for(var i in sArr){
                    sideA[i].classList.remove('active');
                   
                }
                console.log(idx)
                sideA[idx-1].classList.add('active');
            }
            main.style = "transform:translateY(-" + pos + "px)"
        };
    });

});
//nav toggle
window.addEventListener('DOMContentLoaded', function () {
    var mTri = document.querySelector('.menu-trigger');

    var nav = document.querySelector('header nav');

    mTri.addEventListener('click',
        function () {
            mTri.classList.toggle('active');
            nav.classList.toggle('active');

        });



});













