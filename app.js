const buildSlideMarkup = (arr) => {
	let slideMarkup = '';
  for(let i in arr) {
    slideMarkup += '<slide><div class="label">' + arr[i] + '</dic></slide>'
  }
  return slideMarkup;
};

new Vue({
	el: '#example',
  data: '',
  components: {
  	'carousel': VueCarousel.Carousel,
    'slide': VueCarousel.Slide
  },
  template: '<div><carousel :autoplay="true">' + buildSlideMarkup(["a", "b", "c"]) + '</carousel></div>'
});
