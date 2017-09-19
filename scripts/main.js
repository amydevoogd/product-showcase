// init ScrollMagic Controller
var controller = new ScrollMagic.Controller();

// Scene handler for tweening bar
var barTween = new ScrollMagic.Scene({
  triggerElement: ".heroLaptop",
})
.setTween(".heroBar", 2, {scale: 0.45, ease:Bounce.easeOut}) // trigger a TweenMax.to tween
.addIndicators({name: "scale bar"})


// Scene handlers for layers
var pinHeroElements = new ScrollMagic.Scene({
  triggerElement: ".heroPin", // point of execution
  triggerHook: 0, // don't trigger until #heroHead hits the top of the viewport
  reverse: true // allows the effect to trigger when scrolled in the reverse direction
})
.setPin(".heroPin", {pushfollowers: false}) // the element we want to pin
.addIndicators({
  name: "pin hero elements",
  colorTrigger: "green",
  colorStart: "green"
})

var pinLaptop = new ScrollMagic.Scene({
  triggerElement: ".heroLaptop",
  triggerHook: 0.07,
  reverse: true
})
.setPin(".heroLaptop")
.addIndicators({
  name: "pin laptop",
  colorTrigger: "red",
  colorStart: "red"
})


var pinNotebook = new ScrollMagic.Scene({
  triggerElement: ".heroNotebook",
  triggerHook: 0.45,
  reverse: true
})
.setPin(".heroNotebook")
.addIndicators({
  name: "pin notebook",
  colorTrigger: "blue",
  colorStart: "blue"
})


var pinGlasses = new ScrollMagic.Scene({
  triggerElement: ".heroGlasses",
  triggerHook: 0.47,
  reverse: true
})
.setPin(".heroGlasses")
.addIndicators({
  name: "pin glasses",
  colorTrigger: "chocolate",
  colorStart: "chocolate"
})


var pinTabletop = new ScrollMagic.Scene({
  triggerElement: ".heroTabletop",
  triggerHook: 0.43,
  reverse: true
})
.setPin(".heroTabletop")
.addIndicators({
  name: "pin tabletop",
  colorTrigger: "BlueViolet",
  colorStart: "BlueViolet"
})


// Add Scenes to ScrollMagic Controller
controller.addScene([
  barTween,
  pinHeroElements,
  pinLaptop,
  pinNotebook,
  pinGlasses,
  pinTabletop
]);