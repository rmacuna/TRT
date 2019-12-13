// const background_image = document.getElementById("animBackground");

// setTimeout(() => {
//   background_image.classList.remove("modernio--background-1");
//   background_image.classList.add("modernio--background-2");
// }, 1000);

AOS.init();

const tl = anime.timeline({
  easing: "easeOutExpo",
  duration: 2250,
  delay: 400
});
tl.add({
  targets: ".modernio-anime .anim-elem",
  loop: false,
  easing: "easeOutExpo",
  delay: function(el, i, l) {
    return 1 * 400 * i;
  },
  opacity: 1
});
