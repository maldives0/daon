


window.addEventListener('DOMContentLoaded', function () {
     

            var about = document.querySelector('.about');
            var ulEle = about.querySelector('.v_list');
        
            var liEle;
          
        
            //li tag create
            for (var i = 0; i <10; i++) {
                ulEle.innerHTML += "<li class='p" + i + "'></li>";
                liEle = ulEle.querySelectorAll('li');
        
            };
            var len = liEle.length;
        
            //li style
            liEle.forEach(function (a, i) {
                var back = "background:url('img/sub/v_" + (i + 1) + ".jpg') center /100% 100% no-repeat;";
              
        
                a.style = back ;
        
            });

           
         
           
            var loop;
            var num = 0;
            $('.v_list li').not(':first').hide();
            //btn
           
        
            $('.a_btn a').on('click', aBtn);
          
            function aBtn() {
                if($(this).index()==0){
                    fade('prev');
                   
                }else{
                    fade('next');
                }
               
                           
            };
        

            //fade
          
            function fade(p){
             $('.v_list li').eq(num).fadeOut(1000);
              (p == 'next')? num++ : num--;
                update();
                $('.v_list li').eq(num).fadeIn(1000);
            }
            function update(){
                if(num >= len) num = 0;
                if(num == -1) num = len-1;

            }
             //loop
             function clearLoop(){
                clearInterval(loop);
            };
            function interLoop(){
                loop = setInterval(fade,2000);
            };
            interLoop();
            //mouse acting
            $('.v_list, a_btn a').on(
                {
                    mouseenter: clearLoop,
                    mouseleave: interLoop
                }
            );
        
            //indi
            var indiUl = about.querySelector('.indi');
        
        
           
            for (var i = 0; i < len; i++) {
        
                indiUl.innerHTML += "<a data-num='" + i + "'></a>";
            };
            var indiA = indiUl.querySelectorAll('a');
        
            indiA[0].classList.add('active');
            indiA.forEach(function indi(a) {
        
        
                a.addEventListener('click', click);
            });
        
            function white() {
                for (var i = 0; i < len; i++) {
                    indiA[i].classList.remove('active');
                };
                indiA[idx].classList.add('active');
            }
            
            function click() {
                for (var i = 0; i < len; i++) {
                    indiA[i].classList.remove('active');
                };
                this.classList.add('active');
                var aI = this.dataset.num;
                pos = "left:" + (-100 * aI) + "%;";
                ulEle.style = pos;
            };

       

        
        });

     


      

    














