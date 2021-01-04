// DOM elems
const body = document.body;
const slides = document.querySelectorAll('.slide');
const left = document.getElementById('left');
const right = document.getElementById('right');
// counter for slides
let activeSlide = 0;
// update background based on current value of activeSlide
const setBgToBody = () => {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
};
// clean up .active class so it's only where it should be in DOM
const setActiveSlide = () => {
  slides.forEach((slide) => slide.classList.remove('active'));
  slides[activeSlide].classList.add('active');
};

// listeners update value of activeSlide, then call up the func's
// increment and reset to 0 after end of slides
right.addEventListener('click', () => {
  activeSlide++;
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  setBgToBody();
  setActiveSlide();
});
// decrement and set activeSlide to last value if going left from 0
left.addEventListener('click', () => {
  activeSlide--;
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  setBgToBody();
  setActiveSlide();
});

setBgToBody();
