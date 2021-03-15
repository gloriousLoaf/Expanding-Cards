const imgs = document.getElementById('imgs');
const left = document.getElementById('left');
const right = document.getElementById('right');

const img = document.querySelectorAll('#imgs img');

let idx = 0;

/**
 * reset idx to `0` or `length - 1` at ends of carousel,
 * set translateX to negative value of idx * 500
 */
const changeImage = () => {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }
  imgs.style.transform = `translateX(${-idx * 500}px)`;
};

const run = () => {
  idx++;
  changeImage();
};

let int = setInterval(run, 2000);

const resetInt = () => {
  clearInterval(int);
  int = setInterval(run, 2000);
};

left.addEventListener('click', () => {
  idx--;
  changeImage();
  resetInt();
});

right.addEventListener('click', () => {
  idx++;
  changeImage();
  resetInt();
});
