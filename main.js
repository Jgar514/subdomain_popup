// We need to target our popup container, skip button, and visit button.

const popupOverlay = document.querySelector(".popup-overlay");
const skipButton = document.querySelector(".popup-container .skip-button");
const visitButton = document.querySelector(".popup-container .visit-button");

let remainingTime = 5;
let allowedToSkip = false;
let popupTimer;
 

/*const createPopupCookie = () => {
    let expiresDays = 30;
    let date= new Date();
    date.setTime(date.getTime() + expiresDays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + date.toUTCString();
    document.cookie = `popupCookie=true; ${expires}; path=/;`
}*/

//create a function to show the ad

const showAd = () => {
    // checks if scroll value > 100
    
        //if so then add the active class to the popup overlay
        popupOverlay.classList.add("active");
        // create the timer
         popupTimer = setInterval(() => {
            console.log(remainingTime);
            skipButton.innerHTML = `Skip in ${remainingTime}s`;
            remainingTime--;

            if(remainingTime < 0) {
                allowedToSkip = true;
                skipButton.innerHTML = "Skip";
                clearInterval(popupTimer);
            }
         }, 1000);
     
};

const skipAd = () => {
    popupOverlay.classList.remove("active");
    createPopupCookie(0);
}

//adding event listener to the skip button

skipButton.addEventListener("click",() => {
    if (allowedToSkip) {
        skipAd();
    }
   
}); 

const startTimer = () => {
    if (window.scrollY > 100) {
        showAd(); 
        window.removeEventListener("scroll", startTimer);
    }
};

// to make image pop up after we scroll we need to add event listener
if (!document.cookie.match(/^(.*;)?\s*popupCookie\s*=\s*[^;]+(.*)?$/)) {
window.addEventListener("scroll", startTimer);
}