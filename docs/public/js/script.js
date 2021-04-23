// -----------------------------------------------------
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your Desired Username');
  if (!myname.includes(/#/gm)){
    setUserName();
  }
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Discord is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'You\'ve been Disc-Rolled,' + storedName + "!";
}

myButton.onclick = function() {
  setUserName();
}
