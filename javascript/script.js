document.addEventListener('DOMContentLoaded' , function() {

    /* Сареср повернення */
    
    window.onload = function() {
        // Перевірка типу навігації
        if (performance.navigation.type === 1) {
            // Перенаправлення на index.html при перезавантаженні сторінки
            window.location.href = 'index.html';
        }
    };
    

    
    
    /* Լinks */
    let btn1 = document.querySelector('#one');
    let btn2 = document.querySelector('#two');
   
    let modal_1 = document.querySelector('.modal');
   
    btn1.addEventListener('click' , function() {
    modal_1.classList.add('open')
    })
    btn2.addEventListener('click' , function() {
        modal_1.classList.remove('open')
    }) 
       
    /* About Us */
    let btn3 = document.querySelector('#three');
    let btn4 = document.querySelector('#four');
   
    let modal_2 = document.querySelector('#modal');

    btn3.addEventListener('click' , function() {
    modal_2.classList.add('open')
    })
    btn4.addEventListener('click' , function() {
    modal_2.classList.remove('open')
   })

   const path = window.location.href;
   const menu = [ ...document.querySelectorAll("ul li a") ];
   const link = menu.find(function (elm) {
   console.log(elm.href)
   return elm.href == path
   });
   if (link) {
   link.classList.add('active')
   }
   console.log(menu, path, link);
   
})


    
