let text = [
  "Tutorial Hosting",
  "Tutorial Website",
  "Digital Marketing",
  "Tutorial Design Website",
];
let counter = 0;
setInterval(animateText, 3000);

function animateText() {
  $("#nh-hero-animate").fadeOut(function () {
    $("#nh-hero-animate").html(text[counter]);
    counter++;
    if (counter >= text.length) {
      counter = 0;
    }
    $("#nh-hero-animate").fadeIn();
  });
}

$(window).scroll(function () {
  if ($(window).scrollTop() > 0) {
    $(".nh-navbar-primary").removeClass("bg-transparent");
    $(".nh-navbar-primary").addClass("nh-bg-primary");
  } else {
    $(".nh-navbar-primary").removeClass("ng-bg-primary");
    $(".nh-navbar-primary").addClass("bg-transparent");
  }
});
