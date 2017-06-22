const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

//Added date object, will pull specific methods
//Setting up variables, will use new Date object for real time

var date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour: " + hr + " Minute: " + min +" Second: " + sec);

//Added calculations for the hands

let hrPosition = (hr*360/12)+(min*(360/60)/12);
let minPosition = (min*360/60)+(sec*(360/60)/60);
let secPosition = sec*360/60;

function runClock() {

	//Needed to add to the function to prevent CSS animation rolling back to zero
	hrPosition = hrPosition+(3/360);
	minPosition = minPosition+(6/60);
	secPosition = secPosition+6;


	//Pushing the random positions, translating to degrees

	HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
	MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
	SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

// Runs the created function to move hands every second
var interval = setInterval(runClock, 1000);