$(function ($) {
  "use strict";

  jQuery(document).ready(function () {


    $(".toggle-icon").on("click", function () {
      $(".my-navbar").toggleClass("show");
      $(".mainmenu-area").toggleClass("show");
    });

    $("#nav-icon3").click(function () {
      $(this).toggleClass("open");
    });

    $(".my-navbar .mynav-item").on("click", function (e) {
      if (!$(this).hasClass("active")) {
        var tabNum = $(this).index();
        var nthChild = tabNum + 2;
        $(".my-navbar .mynav-item").removeClass("active");
        $(this).addClass("active");
        $("#main > section.active").removeClass("active");
        $("#main > section:nth-child(" + nthChild + ")").addClass("active");
      }
      e.preventDefault();
    });

    $("#home .pagelink").on("click", function (e) {
      e.preventDefault();
      if (e.currentTarget.id == "g-p-f-h" || e.currentTarget.id == "g-r-f-h") {
        $(".my-navbar .mynav-item").removeClass("active");
        $(".my-navbar .mynav-item." + e.currentTarget.getAttribute('data-href')).addClass("active");
        $("#main > section.active").removeClass("active");
        $("#" + e.currentTarget.getAttribute('data-href')).addClass("active");
      }
    });

    //Mixitup js
    $(".project-gallery").mixItUp();

    /*Typed Activate*/
    var $typed = $("#typed");
    if ($typed.length > 0) {
      $typed.typed({
        strings: ["Web Development", "Telegram Bot Development", "Artificial Intelligence"],
        stringsElement: null,
        typeSpeed: 60,
        startDelay: 300,
        backSpeed: 30,
        backDelay: 350,
        loop: true,
        loopCount: 550,
        showCursor: true,
        cursorChar: "|",
        attr: null,
        contentType: "html",
      });
    }

    // statistics jquery circle progressbar initialization
    var $section = $("#statisticsSection");
    if ($section.length > 0) {
      $(".progress-circle").loading();
    }

    $(".lightbox").magnificPopup({
      type: "image",
    });

    $(".image-preview").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });

});

  $(window).on('load', function () {
    /*Preloader*/
    var preLoder = $("#preloader");
    preLoder.addClass('hide');
  });




});