var step = 0;

document.querySelector(".aeropress").addEventListener(
  "click",
  function(e) {
    bodyTriggered(e);
  },
  false
);

function bodyTriggered(e) {
  var aeropress = document.querySelector(".aeropress");
  var grounds = document.querySelector(".coffee-grounds");
  var sludge = document.querySelector(".coffee-sludge");
  var heat = document.querySelector(".heat-lines");

  switch (step) {
    case 0:
      grounds.classList.remove("hidden");
      break;
    case 1:
      grounds.classList.add("hidden");
      sludge.classList.remove("hidden");
      heat.classList.remove("offscreen");
      break;
    case 2:
      aeropress.classList.add("invert");
      heat.classList.add("offscreen");
      break;
    default:
      break;
  }

  console.log(step);
  step++;
}
