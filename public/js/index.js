const cursor = document.querySelector(".cursor");
const percentageIndicator = document.getElementById("percentage");
const modal = document.getElementById("modal-loader");
// const anime = require("animejs");
//---------- Loader animations ---------------//

// let increment = 100 > 0 ? 1 : -1;
// let stepTime = Math.abs(Math.floor(7000 / 100));
// let element = percentageIndicator;
// let current = 0;
// let end = 100;
// let timer = setInterval(function() {
//   current += increment;
//   element.innerHTML = current + "%";
//   if (current == end) {
//     clearInterval(timer);
//   }
// }, stepTime);

// let loader = {
//   charged: "0%"
// };

document.addEventListener("mousemove", e => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 14) + "px; left: " + (e.pageX - 14) + "px;"
  );
});

// Mouse cursor animation

// anime({
//   targets: loader,
//   charged: "100%",
//   round: 1,
//   duration: 8000,
//   easing: "linear",
//   update: function() {
//     percentageIndicator.innerHTML = loader.charged;
//   }
// });

setTimeout(() => {
  modal.classList += " loader-fade";
  setTimeout(() => {
    modal.style.display = "none";
  }, 2100);
}, 7500);

// --------------------------- //
