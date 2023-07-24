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
})

/* End of Swiper.js (Carousell/Slides) configuration */
