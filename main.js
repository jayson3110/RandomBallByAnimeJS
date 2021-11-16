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
// .add({ targets: 'div.sphere', background: 'hsla(0, 100%, 100%, .2)' }, 0)
.add({ targets: 'div.sphere ', translateX: 200 , translateY:100}, 0);