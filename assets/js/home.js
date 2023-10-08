$(".customers__slide").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 900,
  autoplay: false,
  autoplaySpeed: 3000,
  variableWidth: true,
  nextArrow: ".next",
  prevArrow: ".previous",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});