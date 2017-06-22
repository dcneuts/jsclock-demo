const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

//Initial random positions to check functionality

let hrPosition = 30;
let minPosition = 150;
let secPosition = 260;

//Added date object, will pull specific methods
//Setting up variables, will use new Date object for real time

var date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

//Pushing the random positions, translating to degrees

HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";