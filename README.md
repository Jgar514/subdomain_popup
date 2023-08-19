<div align="center">
  
# Daniel Negreanu Masterclass Ad

## Pop-up with skip button once 5 second timer finishes

![Alt text](https://github.com/Jgar514/subdomain_popup/blob/main/biggergifpopup.gif)

<!-- <img width="400" alt="Screenshot 2023-07-02 at 12 05 25 AM" src="https://github.com/Jgar514/subdomain_popup/blob/main/popup.gif"> -->

<!-- [Link text](https://website-name.com) -->

[LIVE DEMO](https://popup.joshuagarvey.com/)

</div>

```
yaml

let remainingTime = 5;
let allowedToSkip = false;
let popupTimer;



```

Pop-up appears on scroll event

```
 yaml


const startTimer = () => {
	if (window.scrollY > 100) {
		showAd();
		window.removeEventListener("scroll", startTimer);
	}
};
```
