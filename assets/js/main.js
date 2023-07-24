let slides = [
  {
    stars: 4.2,
    rating: "4.2/5",
    reviews: "45k",
    photo_url:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Trustpilot_Logo_%282022%29.svg/320px-Trustpilot_Logo_%282022%29.svg.png",
    source: "Trustpilot",
  },
  {
    stars: 4.1,
    rating: "4.1/5",
    reviews: "18k",
    photo_url:
      "https://capterra.s3.amazonaws.com/assets/images/logos/capterra.png",
    source: "Capterra",
  },
];

/*
Swiper.js (Carousell/Slides) configuration
https://swiperjs.com/swiper-api#initialize-swiper
*/
const swiper = new Swiper(".swiper", {
  a11y: {
    prevSlideMessage: "Previous slide",
    nextSlideMessage: "Next slide",
  },

  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});

/* End of Swiper.js (Carousell/Slides) configuration */
