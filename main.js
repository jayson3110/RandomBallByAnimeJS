var colorsExamples = anime.timeline({
  endDelay: 1000,
  easing: 'easeInOutQuad',
  direction: 'alternate',
  loop: true
})
.add({ targets: 'div.red ',  background: '#FFFF' }, 0)
.add({ targets: 'div.green',  background: 'rgb(25,205,205)' }, 0)
.add({ targets: 'div.blue',  background: 'hsl(0, 30%, 20%)' }, 0)
.add({ targets: 'div.yellow', background: 'rgba(221,202,205, .2)' }, 0)
.add({ targets: 'div.sphere', background: 'hsla(0, 100%, 100%, .2)' }, 0)



var anime8 = document.querySelectorAll(".js-anime8");

var randoms = anime({
  targets: anime8,
  translateX: function() {
    return anime.random(100, 500);
  },
  translateY: function() {
    return anime.random(-100, 250);
  },
  scale: function() {
    return anime.random(0.5, 1.5);
  },
  duration: function() {
    return anime.random(500, 1000);
  },
  delay: function() {
    return anime.random(0, 0);
  },
  background: function() {
    randomR = anime.random(0, 255);
    randomG = anime.random(0, 255);
    randomB = anime.random(0, 255);
    rgbValue = "rgb(" + randomR + "," + randomG + "," + randomB + ")";
    return rgbValue;
  },
  direction: "alternate",
  loop: true,
  easing: "easeInOutQuad"
});