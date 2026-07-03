/* ============================================
   Selvam Constructions — main.js (jQuery)
   Handles: sticky nav shadow, mobile menu,
   scroll-reveal animations, animated counters,
   back-to-top button, smooth anchor scrolling.
   ============================================ */

$(function () {

  /* ---------- Footer year ---------- */
  $("#year").text(new Date().getFullYear());

  /* ---------- Sticky nav shadow on scroll ---------- */
  function handleNavShadow() {
    if ($(window).scrollTop() > 20) {
      $("#navbar").addClass("scrolled");
    } else {
      $("#navbar").removeClass("scrolled");
    }
  }
  handleNavShadow();
  $(window).on("scroll", handleNavShadow);

  /* ---------- Mobile menu toggle ---------- */
  $("#menuBtn").on("click", function () {
    $(this).toggleClass("open");
    $("#mobileMenu").toggleClass("open");
  });

  // Close mobile menu after tapping a link
  $(".mobile-link").on("click", function () {
    $("#menuBtn").removeClass("open");
    $("#mobileMenu").removeClass("open");
  });

  /* ---------- Scroll-reveal for elements with .reveal ---------- */
  function revealOnScroll() {
    var windowBottom = $(window).scrollTop() + $(window).height();

    $(".reveal").each(function () {
      var $el = $(this);
      if ($el.hasClass("reveal-active")) return;

      var elTop = $el.offset().top;
      if (elTop < windowBottom - 80) {
        $el.addClass("reveal-active");

        // Trigger counters the moment their container reveals
        $el.find(".counter").each(function () {
          animateCounter($(this));
        });
        if ($el.hasClass("counter") || $el.find(".counter").length === 0) {
          // no-op, counters handled above
        }
      }
    });
  }

  /* ---------- Animated number counters ---------- */
  function animateCounter($el) {
    if ($el.data("counted")) return;
    $el.data("counted", true);

    var target = parseInt($el.attr("data-target"), 10) || 0;
    var duration = 1400;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
      var value = Math.floor(eased * target);
      $el.text(value);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        $el.text(target);
      }
    }
    window.requestAnimationFrame(step);
  }

  revealOnScroll();
  $(window).on("scroll resize", revealOnScroll);

  /* ---------- Back to top button ---------- */
  function handleBackToTop() {
    if ($(window).scrollTop() > 600) {
      $("#backToTop").addClass("visible");
    } else {
      $("#backToTop").removeClass("visible");
    }
  }
  handleBackToTop();
  $(window).on("scroll", handleBackToTop);

  $("#backToTop").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
  });

  /* ---------- Smooth scroll for in-page anchor links ---------- */
  $('a[href^="#"]').on("click", function (e) {
    var targetId = $(this).attr("href");
    if (targetId === "#" || targetId.length < 2) return;
    var $target = $(targetId);
    if ($target.length) {
      e.preventDefault();
      $("html, body").animate(
        { scrollTop: $target.offset().top - 70 },
        700
      );
    }
  });

});
