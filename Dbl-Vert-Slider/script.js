// dom elems
const sliderContainer = document.querySelector('.sliderContainer');
const rightSlide = document.querySelector('.rightSlide');
const leftSlide = document.querySelector('.leftSlide');
const upBtn = document.querySelector('.upBtn');
const downBtn = document.querySelector('.downBtn');
const slidesLength = rightSlide.querySelectorAll('div').length;
// setting a vh value by using slidesLength indices * 100,
// inverts the order of the two sides making them lineup correctly
let activeSlideIdx = 0;
leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`;
// listeners pass value to func
upBtn.addEventListener('click', () => changeSlide('up'));
downBtn.addEventListener('click', () => changeSlide('down'));
// use container height to calc translateY value based on index
const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;

  if (direction === 'up') {
    activeSlideIdx++;
    if (activeSlideIdx > slidesLength - 1) {
      activeSlideIdx = 0;
    }
  } else if (direction === 'down') {
    activeSlideIdx--;
    if (activeSlideIdx < 0) {
      activeSlideIdx = slidesLength - 1;
    }
  }

  rightSlide.style.transform = `translateY(-${
    activeSlideIdx * sliderHeight
  }px)`;

  leftSlide.style.transform = `translateY(${activeSlideIdx * sliderHeight}px)`;
};
