const love = document.querySelector('.love');
const times = document.querySelector('#times');

// clicked for listener, timesClicked for count in dom
let clicked = 0;
let timesClicked = 0;

// custom dblclick event
love.addEventListener('click', (e) => {
  // first click, set clicked to current time
  clicked === 0
    ? (clicked = new Date().getTime())
    : // if second click comes < 800ms later, createHeart
    new Date().getTime() - clicked < 800
    ? createHeart(e)
    : // else treat it like a new first click
      (clicked = new Date().getTime());
});

// create, add props, show in UI
const createHeart = (e) => {
  // reset clicked & update like count
  clicked = 0;
  times.innerHTML = ++timesClicked;
  // create FA heart
  const heart = document.createElement('i');
  heart.classList.add('fas');
  heart.classList.add('fa-heart');
  // dblclick position in viewport
  const x = e.clientX;
  const y = e.clientY;
  // offsets to subtract, keep heart inside image
  const offsetLeft = e.target.offsetLeft;
  const offsetTop = e.target.offsetTop;
  // coords relative to image
  const xInside = x - offsetLeft;
  const yInside = y - offsetTop;
  // set relative positioning & append
  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;
  love.appendChild(heart);
  // cleanup old hearts from dom
  setTimeout(() => heart.remove(), 600);
};
