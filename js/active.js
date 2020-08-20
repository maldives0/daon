window.addEventListener('DOMContentLoaded',function(){
var main = document.querySelector('main');
var mDiv = document.querySelectorAll('main div');
var divPos = [];
mDiv.forEach(function(el){ 
divPos.push(el.offsetTop);
console.log(divPos)
});














});