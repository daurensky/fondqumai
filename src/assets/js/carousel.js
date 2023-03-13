const splide = new Splide('.splide', {
  type: 'loop',
  pagination: false,
  arrows: false,
  drag: true,
  autoplay: true,
  interval: 5 * 1000,
  pauseOnHover: false,
  easing: 'ease',
  autoHeight: true,
})

splide.mount()
