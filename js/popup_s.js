window.addEventListener('DOMContentLoaded', function () {
    //start
    var data = new XMLHttpRequest();
    var response;
    var popDiv = document.querySelector('.popup');
    var facArt = document.querySelector('.fac article')
    var facFig = facArt.getElementsByTagName('figure');


    data.open('Get', 'data_s.json', true);
    data.send(null);

    data.addEventListener('load', dataFun);

    var name, desc, imgSrc, article = '', popup = '', num;

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
                article += "<figcaption><h2>" + name + "</h2>" + tit;
                article += "</figcaption> </figure>";


            });
            facArt.innerHTML=article;
            //foreach end


    //daterun
        }
        dataRun();

   Array.from(facFig).forEach(function(el){

    el.addEventListener('click',popUp);
   })


    function popUp(e) {

        var thisParent = e.currentTarget.parentElement;
        var thisChildren = thisParent.children;
        num = Array.from(thisChildren).indexOf(e.currentTarget);

        popDiv.classList.add('active');

        pop(num);
        //popup end
    }




        function pop(num) {

            response.service.forEach(function (el,idx) {



                name = response.service[num].name;
                tit = response.service[num].tit;
                desc = response.service[num].desc;
                imgSrc = response.service[num].imgSrc;

                popup = "<figure class='f_a'>";
                popup += "<p><img src='" + imgSrc + "'></p>";
                popup += "<figcaption><h2>" + name +"("+tit+")</h2>" ;
                popup +=  desc + "</figcaption> </figure>";

                //foreach end
            });
            popDiv.innerHTML = popup;

            //pop end
        }
      




        //dataFun end
    }


    popDiv.addEventListener('click',
        function () {
            popDiv.classList.remove('active');

            //end
        });

    //end
});