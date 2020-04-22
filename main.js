var step = 1;
var proceed = true;
var countdown;


function handleClick(e) {
  if (proceed) bodyTriggered(e);
  proceed = false
  setTimeout(function() {
    proceed = true
  }, 500);
}

document.querySelector("html").addEventListener("touchstart", handleClick, false);
document.querySelector("html").addEventListener("click", handleClick, false);

var start = document.querySelector(".start");
var wpr = document.querySelector(".animation-wpr")
var aeropress = document.querySelector(".aeropress");
var plunger = document.querySelector(".plunger");
var grounds = document.querySelector(".coffee-grounds");
var sludge = document.querySelector(".coffee-sludge");
var sludgeText = document.querySelector(".coffee-sludge .text");
var timer = document.querySelector(".timer");
var skip = document.querySelector(".skip");
var aeroHeat = document.querySelector(".aeropress .heat-lines");
var cup = document.querySelector(".cup-wpr");
var cupHeat = document.querySelector(".cup-wpr .heat-lines");
var coffee = document.querySelector(".coffee");
var credits = document.querySelector(".credits");

function bodyTriggered() {
  switch (step) {
    case 1:
      start.classList.add("display-none");
      aeropress.classList.remove("hidden");
      break;
    case 2:
      grounds.classList.remove("hidden");
      break;
    case 3:
      sludge.classList.remove("hidden-slider");
      sludgeText.classList.remove("hidden");
      startTimer();
      grounds.classList.add("hidden");
      aeroHeat.classList.remove("hidden");
      break;
    case 4:
      clearInterval(countdown);
      sludgeText.classList.add("hidden");
      aeropress.classList.add("invert");
      aeroHeat.remove();
      cup.classList.remove("hidden");
      break;
    case 5:
      sludge.classList.add("hidden-slider");
      plunger.classList.add("down");
      coffee.classList.remove("hidden-slider");
      aeropress.classList.add("down");
      break;
    case 6:
      wpr.classList.add("shrink");
      cupHeat.classList.remove("hidden");
      aeropress.classList.add("hidden-fade");
      credits.classList.remove("hidden");
    default:
      break;
  }
  
  step++;
}

function startTimer() {
  var skipTracker = 0;
  countdown = setInterval(() => {
    skipTracker++;
    timer.innerText = Number(timer.innerText) - 1;
    if (timer.innerText === "0") {
      timerInstructions.innerText = "Flip!";
      clearInterval(countdown);
    }
    if (skipTracker === 4) {
      skip.classList.remove("hidden");
    }
  }, 1000);
}