window.addEventListener('DOMContentLoaded', function () {
  const data = new XMLHttpRequest();
  let response;
  const popDiv = document.querySelector('.popup');
  const facArt = document.querySelector('.facility article');
  const facFig = facArt.getElementsByTagName('figure');

  data.open('Get', 'data_service.json', true);
  data.send(null);

  data.addEventListener('load', dataFun);

  let name,
    desc,
    imgSrc,
    article = '',
    popup = '',
    num;

  function dataFun() {
    response = JSON.parse(data.responseText);

    function dataRun() {
      response.service.forEach(function (el) {
        name = el.name;
        tit = el.tit;
        desc = el.desc;
        imgSrc = el.imgSrc;

        article += "<figure class='f_a'>";
        article += "<p><img src='" + imgSrc + "'></p>";
        article += '<figcaption><h2>' + name + '</h2>' + tit;
        article += '</figcaption> </figure>';
      });
      facArt.innerHTML = article;
    }
    dataRun();

    Array.from(facFig).forEach(function (el) {
      el.addEventListener('click', popUp);
    });

    function popUp(e) {
      let thisParent = e.currentTarget.parentElement;
      let thisChildren = thisParent.children;
      num = Array.from(thisChildren).indexOf(e.currentTarget);

      popDiv.classList.add('active');

      pop(num);
    }

    function pop(num) {
      response.service.forEach(function () {
        name = response.service[num].name;
        tit = response.service[num].tit;
        desc = response.service[num].desc;
        imgSrc = response.service[num].imgSrc;

        popup = "<figure class='f_a'>";
        popup += "<p><img src='" + imgSrc + "'></p>";
        popup += '<figcaption><h2>' + name + '(' + tit + ')</h2>';
        popup += desc + '</figcaption> </figure>';
      });
      popDiv.innerHTML = popup;
    }
  }

  popDiv.addEventListener('click', function () {
    popDiv.classList.remove('active');
  });
});
