var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 3,
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 0
          },
        600: {
            slidesPerView: 2,
            spaceBetween: 40
          },
        1170: {
            slidesPerView: 3,
            spaceBetween: 30
          },
    },


    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.example-list-left',
      prevEl: '.example-list-right',
    },

  })