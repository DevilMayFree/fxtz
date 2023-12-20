// $(window).on("load", function () {
//   $(".header-bg").animate({ width: 0 }, 400, false);
// });
$(document).ready(function () {
  //取得網頁高度
  const navActive = function (windowScroll, pageId) {
    let pageOffsetTop = 0;
    let time = null;
    if (pageId === "main-vision") {
      pageOffsetTop = $(`#${pageId}`).offset().top;
      $(`#${pageId}`).find(".bg").find(".reveal-text").addClass("active");
      for (let i = 1; i <= 4; i++) {
        time = setTimeout(function () {
          $(`#${pageId}`)
            .find(`.title${i}`)
            .find(".reveal-text")
            .addClass("active");
        }, 400 * i);
      }
      // clearTimeout(time);
    } else {
      pageOffsetTop = $(`#${pageId}`).find(".nav-title").offset().top;
      let windowsHeight = $(window).height();
      if (windowScroll === 0) {
        $(`.gtma_button`).parent().removeClass("active");
        // $(`#${pageId}`).find(".reveal-text").removeClass("active");
      }
      if (windowScroll + 150 >= pageOffsetTop) {
        $(`.gtma_button[data-set=${pageId}]`)
          .parent()
          .addClass("active")
          .siblings()
          .removeClass("active");
      }
      if (windowScroll + windowsHeight >= pageOffsetTop) {
        $(`#${pageId}`).find(".reveal-text").addClass("active");
        time = setTimeout(function () {
          $(`#${pageId}`).find(".reveal-text2").addClass("active");
        }, 400);
      }
    }
    clearTimeout();
  };
  let bannerOffset = $("#main-vision").offset().top;
  function throttle(func, timeout = 250) {
    let last;
    let timer;

    return function () {
      const context = this;
      const args = arguments;
      const now = +new Date();

      if (last && now < last + timeout) {
        clearTimeout(timer);
        timer = setTimeout(function () {
          last = now;
          func.apply(context, args);
        }, timeout);
      } else {
        last = now;
        func.apply(context, args);
      }
    };
  }

  function checkNavActive() {
    var aTop = $(this).scrollTop();
    navActive(aTop, "main-vision");
    navActive(aTop, "features");
    navActive(aTop, "bouns");

    navActive(aTop, "history");
    navActive(aTop, "bouns2");
  }
  $(window).scroll(throttle(checkNavActive));
  checkNavActive();
  let swiper2 = new Swiper(".bouns-swiper", {
    // If we need pagination
    // autoplay: {
    //   delay: 2500,
    // },
    cssMode: true,
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 10,
    // autoHeight: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return `
        <div class="
          ${className} bouns-swiper-button">
         
          <div class="title">
          <p>焦點</p>
          <p>${index + 1}</p> 
          </div>
        
        </div>  `;
      },
    },

    // Navigation arrows
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    breakpoints: {
      1025: {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });
  let title = ["績效走勢", "績效表現", "資產配置"];
  let swiper3 = new Swiper(".bouns-swiper2", {
    // autoplay: {
    //   delay: 2500,
    // },
    cssMode: true,
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 10,
    // autoHeight: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return `
        <div class="
          ${className} bouns-swiper-button">
         
          <div class="title">
          <p>${title[index]}</p> 
          </div>
        
        </div>  `;
      },
    },

    // Navigation arrows
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    breakpoints: {
      1025: {
        direction: "vertical",
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });
  let swiper4 = new Swiper(".feature-swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // $(".light-box-button").click(function () {
  //   $(".light-box-bg").hide();
  // });
  $(".topUp").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
  // $(".promo-button").on("click", function () {
  //   let cIndex = $(".promo-button").index(this);
  //   swiper3.slideTo(cIndex, 1000, false);
  //   $(".light-box-bg").addClass("on").show();
  // });
  $(".gtma_button").on("click", function () {
    console.log($(this).attr("data-set"), "gtma");
    $(this).parent().addClass("active").siblings().removeClass("active");
    $(".mainMenu,.menu-btn ").removeClass("open");
    let id = $(this).attr("data-set");
    let offset = $(`#${id}`).find(".nav-title").offset();
    $("html,body").animate({ scrollTop: offset.top - 60 }, 700);
  });
  // $(".bouns-swiper-button").on("click", function () {
  //   let widnowWidth = $(window).innerWidth();
  //   if (widnowWidth < 1025) {
  //     let offset = $(".bouns-swiper").find(".swiper-wrapper").offset();
  //     $("html,body").animate({ scrollTop: offset.top - 100 }, 700);
  //   }
  // });

  $(".noteTitle").on("click", function () {
    $(".noteTitle").toggleClass("active").find(".detail").toggleClass("active");
    $(".note").toggleClass("active");
    $(".descript").slideToggle();
  });
  $(".noteTitle").click();
  // $(".note-header").on("click", function () {
  //   console.log("note-description", $(".note-header").index(this));
  //   $(".note-header").eq($(".note-header").index(this)).toggleClass("on");
  //   $(".note-description").eq($(".note-header").index(this)).slideToggle();
  // });
  const menuBtn = document.querySelector(".menu-btn");
  const menDetail = document.querySelector("#mainMenu");
  let menuOpen = false;
  menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
      menuBtn.classList.add("open");
      menDetail.classList.add("open");
      menuOpen = true;
    } else {
      menuBtn.classList.remove("open");
      menDetail.classList.remove("open");
      menuOpen = false;
    }
  });

  // menuBtn.click();
  // cookieBtn.addEventListener("click", () => {
  //   cookieWrapper.classList.add("remove");
  //   footerWrapper.classList.add("remove");
  // });
});
