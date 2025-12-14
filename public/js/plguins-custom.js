"use strict";

document.addEventListener("DOMContentLoaded", function () {
  $(function ($) {

    /*===============  Our Games swiper plugin start ===============*/
    var swiper = new Swiper(".mySwiperx", {
      pagination: {
        el: ".swiper-pagination",
      },
      loop: true,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        slidesPerView: 3,
      },
      navigation: {
        nextEl: ".swiper-button-nextx",
        prevEl: ".swiper-button-prevx",
      },
      breakpoints: {
        1400: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 3,
        },
        578: {
          slidesPerView: 2,
        },
        375: {
          slidesPerView: 1,
        },
      },
    });
    /*===============  Our Games swiper plugin start ===============*/

    /*=============== researches-details slider start ===============*/
    var swiper = new Swiper(".mySwipery", {
      pagination: {
        el: ".swiper-pagination",
      },
      loop: true,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        slidesPerView: 3,
      },
      navigation: {
        nextEl: ".swiper-button-nexty",
        prevEl: ".swiper-button-prevy",
      },
      breakpoints: {
        1400: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 1,
        },
        578: {
          slidesPerView: 1,
        },
        375: {
          slidesPerView: 1,
        },
      },
    });
    /*=============== researches-details slider end ===============*/

    /*=============== achievements introduction  section slider start ===============*/
    var swiper = new Swiper(".mySwiperm", {
      pagination: {
        el: ".swiper-pagination",
      },
      loop: true,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        slidesPerView: 3,
      },
      navigation: {
        nextEl: ".swiper-button-nextm",
        prevEl: ".swiper-button-prevm",
      },
      breakpoints: {
        1400: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        578: {
          slidesPerView: 1,
        },
        375: {
          slidesPerView: 1,
        },
      },
    });
    /*=============== achievements introduction  section slider end ===============*/

    /*=============== Brand Sliders hero down section start ===============*/
    let bradCarouselOne = document.querySelector(".brand-carouselOne");
    if (bradCarouselOne) {
      const swiper = new Swiper(bradCarouselOne, {
        loop: true,
        speed: 7000,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
        spaceBetween: 50,
        slidesPerView: "auto",
      });
    }
    /*=============== Brand Sliders hero down section end ===============*/

    /*=============== Our Partners section start ===============*/
    let bradCarouselTwo = document.querySelector(".brand-carouselTwo");
    if (bradCarouselTwo) {
      const swiper = new Swiper(bradCarouselTwo, {
        loop: true,
        speed: 6000,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
        spaceBetween: 50,
        slidesPerView: "auto",
      });
    }
    /*=============== Our Partners section end ===============*/

    /*=============== magnific Popup start ===============*/
    $(document).ready(function () {
      $(".popup-youtube").magnificPopup({
        type: "iframe",
      });
    });
    /*=============== magnific Popup end ===============*/

    /*=============== AOS animation start ===============*/
    AOS.init({
      duration: 2000,
      delay: 5000,
    });
    $(document).ready(function () {
      $(".title").attr({
        "data-aos": "zoom-in",
        "data-aos-duration": "2000",
      });
      AOS.init({
        once: true,
      });
    });
    /*=============== AOS animation end ===============*/

    /*=============== Explore Game section tab video start ===============*/
    $(document).ready(function () {
      var tabWrapper = $("#tab-block"),
        tabMnu = tabWrapper.find(".tab-mnu  li"),
        tabContent = tabWrapper.find(".tab-cont > .tab-pane");

      tabContent.not(":first-child").hide();

      tabMnu.each(function (i) {
        $(this).attr("data-tab", "tab" + i);
      });
      tabContent.each(function (i) {
        $(this).attr("data-tab", "tab" + i);
      });

      tabMnu.click(function () {
        var tabData = $(this).data("tab");
        tabWrapper.find(tabContent).hide();
        tabWrapper
          .find(tabContent)
          .filter("[data-tab=" + tabData + "]")
          .show();
      });

      $(".tab-mnu > li").click(function () {
        var before = $(".tab-mnu li.active");
        before.removeClass("active");
        $(this).addClass("active");
      });
    });
    /*=============== Explore Game section tab video end ===============*/

    

    /*=============== global popup start ===============*/
    // Wallet popup
    $("#inline-popups").magnificPopup({
      delegate: "a",
      removalDelay: 500,
      callbacks: {
        beforeOpen: function () {
          this.st.mainClass = this.st.el.attr("data-effect");
        },
      },
      midClick: true,
    });

    // CREATE popup
    $("#inline-popupg").magnificPopup({
      delegate: "a",
      removalDelay: 500,
      callbacks: {
        beforeOpen: function () {
          this.st.mainClass = this.st.el.attr("data-effect");
        },
      },
      midClick: true,
    });

    // CREATE popup
    $("#inline-popupk").magnificPopup({
      delegate: "a",
      removalDelay: 500,
      callbacks: {
        beforeOpen: function () {
          this.st.mainClass = this.st.el.attr("data-effect");
        },
      },
      midClick: true,
    });
    $("#inline-popupa").magnificPopup({
      delegate: "a",
      removalDelay: 500,
      callbacks: {
        beforeOpen: function () {
          this.st.mainClass = this.st.el.attr("data-effect");
        },
      },
      midClick: true,
    });
    /*=============== global popup end ===============*/

    

    /*=============== achievements section active button start ===============*/
    jQuery(document).ready(function () {
      buttonFunction();
    });
    function buttonFunction() {
      jQuery(".buttonAch").on("click", function () {
        jQuery(this).siblings().removeClass("active");
        jQuery(this).toggleClass("active");
      });
    }
    /*=============== achievements section active button end ===============*/

    /*=============== achievements introduction faq start ===============*/
    $(document).ready(function () {
      $(".accordion-single .header-area").click(function () {
        if ($(this).closest(".accordion-single").hasClass("active")) {
          $(this).closest(".accordion-single").removeClass("active");
          $(this).next(".content-area").slideUp();
        } else {
          $(".accordion-single").removeClass("active");
          $(this).closest(".accordion-single").addClass("active");
          $(".content-area").not($(this).next(".content-area")).slideUp();
          $(this).next(".content-area").slideToggle();
        }
      });
    });
    /*=============== achievements introduction faq end ===============*/

    /*===============  nav ber section nav active start ===============*/
    var activeNavItem = $(".nav-item");
    activeNavItem.click(function () {
      activeNavItem.removeClass("active");
      $(this).addClass("active");
    });
    /*===============  nav ber section nav active end ===============*/

    /*===============  achievements details section start ===============*/
    // trigger copy event on click
    $("#copy").on("click", function (event) {
      console.log(event);
      copyToClipboard(event);
    });
    /*achievements details section end */
    function copyToClipboard(e) {
      var t = e.target,
        c = t.dataset.copytarget,
        inp = c ? document.querySelector(c) : null;
      console.log(inp);
      if (inp && inp.select) {
        inp.select();
        try {
          document.execCommand("copy");
          inp.blur();

          t.classList.add("copied");
          setTimeout(function () {
            t.classList.remove("copied");
          }, 1500);
        } catch (err) {
          alert("please press Ctrl/Cmd+C to copy");
        }
      }
    }
    /*===============  achievements details section end ===============*/

    /*===============   home page navBer notification start ===============*/
    $(".altmenu").on("click", function () {
      $(".sidepanel").toggleClass("open");
    });
    /*===============   home page navBer notification end ===============*/
  });
});
