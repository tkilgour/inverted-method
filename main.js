var step = 0;

document.querySelector(".aeropress").addEventListener(
  "click",
  function(e) {
    bodyTriggered(e);
  },
  false
);

function bodyTriggered(e) {
  var grounds = document.querySelector(".coffee-grounds");

  switch (step) {
    case 0:
      grounds.classList.remove("hidden");
      break;
    case 1:
      grounds.classList.add("hidden");
      break;
    default:
      break;
  }

  console.log(step);
  step++;
}
