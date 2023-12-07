new Swiper(".vis-banner", {
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });

    new Swiper(".main-conlist", {
    slidesPerView: 2.2,
    spaceBetween: 10,
    loop: true
  });
    new Swiper(".imglist", {
    slidesPerView: 2.2,
    spaceBetween: 10,
    loop: true
  });

  new Swiper(".con5-list", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  new Swiper(".con6-list", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });
  new Swiper(".accSwiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });