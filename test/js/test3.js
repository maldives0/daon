window.addEventListener('DOMContentLoaded', function () {
    var sEle = document.querySelector('.service');
var sDiv = sEle.querySelector('article div');
var sUl = sEle.querySelector('article .s');
var sTop = sEle.offsetTop;
var wH = window.innerHeight;


window.addEventListener('scroll',fade);
function fade(){

          console.log(this)
          if (sTop-wH <= this.scrollY) {
                sDiv.classList.add('fade');
                sUl.classList.add('fade');
          }
       
};

});
