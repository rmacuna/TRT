anime({
  targets: ".square--dots-values .el",
  translateX: function(el) {
    return el.getAttribute("data-x");
  },
  translateY: function(el, i) {
    return 50 + 90 * i;
  },
  scale: function(el, i, l) {
    return l - i + 0.35;
  },
  rotate: function() {
    return anime.random(-360, 360);
  },
  borderRadius: function() {
    return ["50%", anime.random(10, 35) + "%"];
  },
  duration: function() {
    return anime.random(1200, 1800);
  },
  delay: function() {
    return anime.random(0, 400);
  },
  direction: "alternate",
  loop: false
}).finished.then(() => {
  anime({
    targets: ".app--title",
    opacity: 1,
    duration: 200,
    easing: "linear",
    loop: false
  }).finished.then(() => {
    const tl = anime.timeline({
      easing: "easeOutExpo",
      duration: 1250
    });
    tl.add({
      targets: ".function-based-params .el",
      opacity: 1,
      translateY: anime.stagger(-100, { from: "center" }),
      easing: "linear",
      loop: false,
      duration: 200,
      delay: function(el, i, l) {
        return i * 300;
      }
    }).add({
      targets: ".function--row-animated .el",
      opacity: 1,
      duration: 300,
      easing: "linear",
      loop: false,
      delay: function(el, i, l) {
        return i * 400;
      }
    });
  });
});
