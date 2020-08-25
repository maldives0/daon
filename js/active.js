window.addEventListener('DOMContentLoaded', function () {
    var main = document.querySelector('main');
    var mDiv = document.querySelectorAll('main div');

});

window.addEventListener('DOMContentLoaded', function () {
    var mTri = document.querySelector('.menu-trigger');
    var nav = document.querySelector('.header nav');
    mTri.addEventListener('click',
    function() {
        mTri.classList.toggle('active');
        nav.classList.toggle('active');
       
    });
    
});
    












