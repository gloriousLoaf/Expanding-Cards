const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

// ++ on click unless at 4
next.addEventListener('click', () => {
  currentActive >= circles.length
    ? (currentActive = circles.length)
    : currentActive++;
  update();
});

// -- on click unless at 1
prev.addEventListener('click', () => {
  currentActive > 1 ? currentActive-- : (currentActive = 1);
  update();
});

// add or remove active class
const update = () => {
  circles.forEach((circle, i) => {
    i < currentActive
      ? circle.classList.add('active')
      : circle.classList.remove('active');
  });

  // getting width value for .progress css,  ~33% & 66%
  const actives = document.querySelectorAll('.active');
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

  // disable prev at 1
  currentActive === 1 ? (prev.disabled = true) : (prev.disabled = false);
  // disable next at 4
  currentActive === circles.length
    ? (next.disabled = true)
    : (next.disabled = false);
};
