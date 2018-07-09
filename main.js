var step = 0;
var proceed = true;


document.querySelector(".aeropress").addEventListener(
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


var aeropress = document.querySelector(".aeropress");
var plunger = document.querySelector(".plunger");
var grounds = document.querySelector(".coffee-grounds");
var sludge = document.querySelector(".coffee-sludge");
var heat = document.querySelector(".heat-lines");
var cup = document.querySelector(".cup-wpr");
var coffee = document.querySelector(".coffee");

function bodyTriggered(e) {
  switch (step) {
    case 0:
    grounds.classList.remove("hidden");
    break;
    case 1:
    sludge.classList.remove("hidden-slider");
    grounds.classList.add("hidden");
    heat.classList.remove("hidden");
    break;
    case 2:
    aeropress.classList.add("invert");
    heat.remove();
    cup.classList.remove("hidden");
    break;
    case 3:
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

function reset(e) {
  e.preventDefault();
  
  aeropress.classList.remove("down");
  aeropress.classList.remove("invert");
  grounds.classList.add("hidden");
  sludge.classList.add("hidden-slider");
  heat.classList.add("hidden");
  plunger.classList.remove("down");
  cup.classList.add("hidden");
  coffee.classList.add("hidden-slider");
  
  step = 0;
}

// document.querySelector(".handleReset").addEventListener(
//   "click",
//   function(e) {
//     reset(e);
//   },
//   false
// );
