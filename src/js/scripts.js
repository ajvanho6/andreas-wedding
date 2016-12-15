

$(document).ready(function() {

particlesJS.load('particles-js', 'assets/css/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

smoothScroll.init({
  updateURL: false
});

var width = $( window ).width();
  if(width>767){
    menuScroll();
  }

$(window).resize(function(){
  if(width>767){
    menuScroll();
  }
});

var mob = $('.mob');
var colapse = $('.collapse');
mob.on('click', function(){
  //e.preventDefault();
  var self = $(this);
  self.each(function(){
    colapse.removeClass('in');
  });
});


/*
  $(window).resize(function() {
    adjust();
  });
  adjust();
  */

});

function adjust(){
  var image = $('.contact-bg');
  var bodyheight = $(image).height();
  $("#contact").height(bodyheight);
}

function menuScroll(){
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 65) {
            $("nav.navbar.navbar-light.bg-faded").addClass("colorised");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $("nav.navbar.navbar-light.bg-faded").removeClass("colorised");
        }
    });
}
