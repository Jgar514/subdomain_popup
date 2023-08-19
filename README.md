<div align="center">
  
# Daniel Negreanu Masterclass Ad

![Alt text](https://github.com/Jgar514/subdomain_popup/blob/main/biggergifpopup.gif)

<!-- <img width="400" alt="Screenshot 2023-07-02 at 12 05 25 AM" src="https://github.com/Jgar514/subdomain_popup/blob/main/popup.gif"> -->

<!-- [Link text](https://website-name.com) -->

[LIVE DEMO](https://popup.joshuagarvey.com/)

</div>

## Pop-up with skip button once 5 second timer finishes

```
let remainingTime = 5;
let allowedToSkip = false;
let popupTimer;
```

## Pop-up appears on scroll event

```
const showAd = () => {
	// checks if scroll value > 100

	//if so then add the active class to the popup overlay
	popupOverlay.classList.add("active");
	// create the timer
	popupTimer = setInterval(() => {
		console.log(remainingTime);
		skipButton.innerHTML = `Skip in ${remainingTime}s`;
		remainingTime--;

		if (remainingTime < 0) {
			allowedToSkip = true;
			skipButton.innerHTML = "Skip";
			clearInterval(popupTimer);
		}
	}, 1000);
};

//event listener
if (!document.cookie.match(/^(.*;)?\s*popupCookie\s*=\s*[^;]+(.*)?$/)) {
	window.addEventListener("scroll", startTimer);
}
const startTimer = () => {
	if (window.scrollY > 100) {
		showAd();
		window.removeEventListener("scroll", startTimer);
	}
};
```
