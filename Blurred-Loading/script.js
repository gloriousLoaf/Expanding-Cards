const loadText = document.querySelector('.loadingText');
const bg = document.querySelector('.bg');

let load = 0;

// blur function - uses int & scale() below
const blurring = () => {
  load++;
  load > 99 && clearInterval(int);

  // loading % div
  loadText.innerText = `${load}%`;
  // fade out loading %
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  // unblur bg img
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
};

let int = setInterval(blurring, 30);

// mapping 0 - 100% to 1 - 0 opacity for css
const scale = (num, inMin, inMax, outMin, outMax) => {
  return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};
/* above function from SO user August Miller:
  https://stackoverflow.com/questions/10756313 */
