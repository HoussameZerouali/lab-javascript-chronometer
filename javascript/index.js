

const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement =  document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');



function printTime() {
  printSeconds();
  printMinutes();
  
}

function printMinutes() {
  minDecElement.textContent = chronometer.computeTwoDigitNumber(chronometer.getMinutes()).charAt(0);
  minUniElement.textContent = chronometer.computeTwoDigitNumber(chronometer.getMinutes()).charAt(1);
  
}

function printSeconds(){
  secDecElement.textContent = chronometer.computeTwoDigitNumber(chronometer.getSeconds()).charAt(0);
  secUniElement.textContent = chronometer.computeTwoDigitNumber(chronometer.getSeconds()).charAt(1);
  
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  currentTime = chronometer.split()
  splitsElement.innerHTML += `<li> ${currentTime} </li>`
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(btnLeftElement.classList.contains("start")){
   chronometer.start();
   var t = setInterval(this.printTime,1000);
   btnLeftElement.classList.replace("start","stop")
   btnRightElement.classList.replace("reset","split")
   btnRightElement.textContent = "SPLIT"
   btnLeftElement.textContent = "STOP"
   
  }else{
    chronometer.stop();
    btnLeftElement.classList.replace("stop","start")
    btnRightElement.classList.replace("split","reset")
    btnRightElement.textContent = "RESET"
    btnLeftElement.textContent = "START"
  }

  
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.classList.contains("reset")) {
    chronometer.reset();
    splitsElement.innerHTML = "";
    
  }else{
    chronometer.split();
    this.printSplit();
    
    
  }
});


