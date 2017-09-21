// init ScrollMagic Controller
var controller = new ScrollMagic.Controller();


// Scene handler for pinned scene
var pinHeroWrapper = new ScrollMagic.Scene({
  triggerElement: ".hero", // point of execution
  triggerHook: 0, // don't trigger until #heroHead hits the top of the viewport
  duration: 400,
  reverse: true // allows the effect to trigger when scrolled in the reverse direction
})
.setPin(".hero-wrapper",  {pushfollowers: false}) // the element we want to pin
// enable for work in progress
/*
.addIndicators({
  name: "pin hero",
  colorTrigger: "magenta",
  colorStart: "magenta"
})
*/

.addTo(controller);


// TweenMax.for tweening bar from small to large
var tween = TweenMax.from('.hero-bar', 1, {scale: .45});


// Scene handler for tweening bar
var barTween = new ScrollMagic.Scene({
  duration: 800
})
.setTween(tween) // trigger above TweenMax.for tween
//.addIndicators({name: "scale bar"})
.addTo(controller);


// disable Scrollmagic at smaller sizes
controller.scrollPos(function () {
  if(window.innerWidth >= 768){
    return window.pageYOffset;
  } else {
    return 0;
  }
});

// change testimonial when logo is clicked
  $("logo01").click(function() {
    $("testimonial-quotes").html("Engadget likes it");
  });

  $("logo02").click(function() {
    $("testimonial-quotes").html("Ars Technica likes it");
  });

  $("logo03").click(function() {
    $("testimonial-quotes").html("Medium likes it");
  });

});
