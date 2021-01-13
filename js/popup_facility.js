window.addEventListener('DOMContentLoaded', function () {
  const data = new XMLHttpRequest();
  let response;
  const popDiv = document.querySelector('.popup');
  const facArt = document.querySelector('.facility article');
  const facFig = facArt.getElementsByTagName('figure');

  data.open('Get', 'data_facility.json', true);
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
      response.facility.forEach(function (el) {
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
      //popup end
    }

    function pop(num) {
      response.facility.forEach(function () {
        name = response.facility[num].name;
        tit = response.facility[num].tit;
        desc = response.facility[num].desc;
        imgSrc = response.facility[num].imgSrc;

        popup = "<figure class='f_a'>";
        popup += "<p><img src='" + imgSrc + "'></p>";
        popup += '<figcaption><h2>' + name + '<br>(' + tit + ')</h2>';
        popup += desc + '</figcaption> </figure>';
      });
      popDiv.innerHTML = popup;
    }
  }

  popDiv.addEventListener('click', function () {
    popDiv.classList.remove('active');
  });
});
