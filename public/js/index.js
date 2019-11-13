const cursor = document.querySelector(".cursor");
const percentageIndicator = document.getElementById("percentage");

let increment = 100 > 0 ? 1 : -1;
let stepTime = Math.abs(Math.floor(10000 / 100));
let element = percentageIndicator;
let current = 0;
let end = 100;
let timer = setInterval(function() {
  current += increment;
  element.innerHTML = current + "%";
  if (current == end) {
    clearInterval(timer);
  }
}, stepTime);

// function animateValue(id, start, end, duration) {
//   const range = end - start;
//   let current = start;
//   let increment = end > start ? 1 : -1;
//   let stepTime = Math.abs(Math.floor(duration / range));
//   let obj = document.getElementById(id);
//   let timer = setInterval(function() {
//     current += increment;
//     obj.innerHTML = current;
//     if (current == end) {
//       clearInterval(timer);
//     }
//   }, stepTime);
// }

document.addEventListener("mousemove", e => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 14) + "px; left: " + (e.pageX - 14) + "px;"
  );
});
