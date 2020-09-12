window.addEventListener('DOMContentLoaded', function () {
    //start
    var data = new XMLHttpRequest();
    var response;
    var popDiv = document.querySelector('.popup');
    var facArt = document.querySelector('.fac article')
    var facFig = document.querySelectorAll('.fac article figure');


    data.open('Get', 'data_s.json', true);
    data.send(null);

    data.addEventListener('load', dataFun);

    var name, desc, imgSrc, popup = '', num;


    facFig.forEach(function (f) {

        f.addEventListener('click', popUp);
        //fig end
    });
    function popUp(e) {

        var thisParent = e.currentTarget.parentElement;
        var thisChildren = thisParent.children;
        num = Array.from(thisChildren).indexOf(e.currentTarget);

        popDiv.classList.add('active');
       dataFun(num);
        //popup end

    }


        popDiv.addEventListener('click',
            function () {
                popDiv.classList.remove('active');

                //end
            });


        function dataFun(num) {
            response = JSON.parse(data.responseText);

            response.service.forEach(function () {
                
                name = response.service[num].name;
                tit = response.service[num].tit;
                desc = response.service[num].desc;
                imgSrc = response.service[num].imgSrc;

                popup = "<figure class='f_a'>";
                popup += "<p><img src='" + imgSrc + "'></p>";
                popup += "<figcaption><h2>" + name + "</h2>" + tit;
                popup += desc + "</figcaption> </figure>";

                //foreach end
            });
            popDiv.innerHTML = popup;


        //dataFun end
        }

       
    




    //end
});