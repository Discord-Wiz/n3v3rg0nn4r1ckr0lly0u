// -----------------------------------------------------
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
var countDownDate = new Date().getTime() + 7000;
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("timer").innerHTML = "Redirecting in "+ seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Redirecting...";
  }
}, 1000);

function setUserName() {
  let myName = prompt('Please enter your Desired Username');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = "You've been Disc-Rolled, " + myName + "!";
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = "You've been Disc-Rolled, " + storedName + "!";
}

myButton.onclick = function() {
  setUserName();
}
