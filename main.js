var step = 1;
var proceed = true;


document.querySelector("html").addEventListener(
  "click",
  function(e) {
    if (proceed) bodyTriggered(e);
    proceed = false
    setTimeout(function() {
      proceed = true
    }, 500);
  },
  false
);

var start = document.querySelector(".start");
var aeropress = document.querySelector(".aeropress");
var plunger = document.querySelector(".plunger");
var grounds = document.querySelector(".coffee-grounds");
var sludge = document.querySelector(".coffee-sludge");
var heat = document.querySelector(".heat-lines");
var cup = document.querySelector(".cup-wpr");
var coffee = document.querySelector(".coffee");

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
      grounds.classList.add("hidden");
      heat.classList.remove("hidden");
      break;
    case 4:
      aeropress.classList.add("invert");
      heat.remove();
      cup.classList.remove("hidden");
      break;
    case 5:
      sludge.classList.add("hidden-slider");
      plunger.classList.add("down");
      coffee.classList.remove("hidden-slider");
      aeropress.classList.add("down");
      break;
    default:
      break;
  }
  
  step++;
}

// function reset(e) {
//   e.preventDefault();
  
//   aeropress.classList.remove("down");
//   aeropress.classList.remove("invert");
//   grounds.classList.add("hidden");
//   sludge.classList.add("hidden-slider");
//   heat.classList.add("hidden");
//   plunger.classList.remove("down");
//   cup.classList.add("hidden");
//   coffee.classList.add("hidden-slider");
  
//   step = 1;
// }

// document.querySelector(".handleReset").addEventListener(
//   "click",
//   function(e) {
//     reset(e);
//   },
//   false
// );
