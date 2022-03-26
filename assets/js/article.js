$(window).scroll(function () {
  if ($(window).scrollTop() > 650) {
    $(".nh-sticky-sidebar").removeClass("d-none");
    $(".nh-sticky-sidebar").addClass("d-lg-block");

    if ($(window).scrollTop() > 2000) {
      $(
        ".nh-sticky-sidebar > hr, .nh-sticky-sidebar > .nh-article-social"
      ).removeClass("d-flex");
      $(
        ".nh-sticky-sidebar > hr, .nh-sticky-sidebar > .nh-article-social"
      ).addClass("d-none");
    } else {
      $(
        ".nh-sticky-sidebar > hr, .nh-sticky-sidebar > .nh-article-social"
      ).removeClass("d-none");
      $(
        ".nh-sticky-sidebar > hr, .nh-sticky-sidebar > .nh-article-social"
      ).addClass("d-flex");
    }
  } else {
    $(".nh-sticky-sidebar").removeClass("d-lg-block");
    $(".nh-sticky-sidebar").addClass("d-none");
  }
});

$(".nh-textarea-wrapper > textarea").keyup(function () {
  if ($(this).val().length > 0) {
    $(".nh-textarea-button").removeClass("d-none");
    $(".nh-textarea-button").addClass("d-flex");
  } else {
    $(".nh-textarea-button").removeClass("d-flex");
    $(".nh-textarea-button").addClass("d-none");
  }
});

$(".nh-btn-cancel-reply").click(function () {
  $(".nh-textarea-wrapper > textarea").val("");
  $(".nh-textarea-button").removeClass("d-flex");
  $(".nh-textarea-button").addClass("d-none");
});

$(".nh-comment-icon > .nh-reply").click(function () {
  $(".nh-comment-reply, .nh-btn-hide-reply").removeClass("d-none");
  $(".nh-comment-reply").addClass("d-flex");
  $(".nh-btn-hide-reply").addClass("d-block");
});

$(".nh-btn-hide-reply").click(function () {
  $(".nh-comment-reply").removeClass("d-flex");
  $(".nh-btn-hide-reply").removeClass("d-block");
  $(".nh-comment-reply, .nh-btn-hide-reply").addClass("d-none");
});
