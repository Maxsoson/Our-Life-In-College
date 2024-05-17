document.addEventListener('DOMContentLoaded' , function() {
    const captcha = document.querySelector(".captcha-cods"),
        randomBtn = document.querySelector(".random-btn"),
        inputField = document.querySelector("input"),
        enterBtn = document.querySelector(".enter-btn"),
        statusText = document.querySelector(".status-item");

    let allCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','S','T','U','V','W','X','Y','Z',
                        'a','b','c','d','e','f','g','h','i','j','k','l','m','o','p','q','r','s','t','u','v','w','x','y','z',
                         0,1,2,3,4,5,6,7,8,9];

    function getCaptcha(){
        captcha.innerText = '';
        for (let i=0; i<6; i++){
            let randomChar = allCharacters[Math.floor(Math.random() * allCharacters.length)];
            captcha.innerText += `${randomChar}`;
        }
    }

    getCaptcha();

    randomBtn.addEventListener("click",()=> {
    captcha.innerText="";
    getCaptcha();
    });

    enterBtn.addEventListener("click", e=>{
        e.preventDefault();
        statusText.style.display = "block";
        let inputVal = inputField.value.replace(/\s/g, '');
        if (inputVal === captcha.innerText.replace(/\s/g, '')){
            statusText.style.color = "#54CA1F";
            statusText.innerText = "You dont appear to be a robot! :)"
            setTimeout(() => {
                statusText.style.display = "";
                inputField.value = "";
                captcha.innerText= "";
                getCaptcha();
                setTimeout(() => {
                    window.location.href = "home.html";
                },);
            }, 4000);
        } else {
            statusText.style.color = "#DA1241";
            statusText.innerText = "Captcha not matched. Please try again! :(";
        }
    });
    
})