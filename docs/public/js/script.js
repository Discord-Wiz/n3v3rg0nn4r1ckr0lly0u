// -----------------------------------------------------
let myButton = document.querySelector('myButton');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your Desired Username');
  if (myName.content)
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = "You've been Disc-Rolled," + storedName + "!";
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = "You've been Disc-Rolled," + storedName + "!";
}

myButton.onclick = function() {
  setUserName();
}
