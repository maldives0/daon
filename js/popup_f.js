window.addEventListener('DOMContentLoaded', function () {
    //start
    var data = new XMLHttpRequest();
    var response;
    var popDiv = document.querySelector('.popup');
    var facArt = document.querySelector('.fac article')
    var facFig = facArt.getElementsByTagName('figure');

    data.open('Get', 'data_f.json', true);
    data.send(null);

    data.addEventListener('load', dataFun);

    var name, desc, imgSrc, article = '', popup = '', num;





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

            response.facility.forEach(function (el,idx) {



                name = response.facility[num].name;
                tit = response.facility[num].tit;
                desc = response.facility[num].desc;
                imgSrc = response.facility[num].imgSrc;

                popup = "<figure class='f_a'>";
                popup += "<p><img src='" + imgSrc + "'></p>";
                popup += "<figcaption><h2>" + name +"<br>("+tit+")</h2>" ;
                popup +=  desc + "</figcaption> </figure>";

                //foreach end
            });
            popDiv.innerHTML = popup;

            //pop end
        }
        pop(num);




        //dataFun end
    }


    popDiv.addEventListener('click',
        function () {
            popDiv.classList.remove('active');

            //end
        });

    //end
});