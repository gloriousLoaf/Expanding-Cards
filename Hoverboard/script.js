const container = document.getElementById('container');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
const SQUARES = 500;

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.id = i;
  square.tabIndex = 1;

  square.addEventListener('mouseover', () => {
    setColor(square);
  });
  square.addEventListener('focus', () => {
    setColor(square);
  });

  square.addEventListener('mouseout', () => {
    removeColor(square);
  });
  square.addEventListener('blur', () => {
    removeColor(square);
  });

  container.appendChild(square);
}

const setColor = (el) => {
  const color = getRandomColor();
  el.style.background = color;
  el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

const removeColor = (el) => {
  el.style.background = '#1d1d1d';
  el.style.boxShadow = '0 0 2px #000';
};

/**
 * @desc    Add keyboard focus with arrow keys,
 *          bluring current focus and setting new
 *          focus based on keyCode. See numReset().
 * @param   event keycode
 */
container.onkeydown = (e) => {
  let currentSq = Number(e.target.id);
  document.getElementById(e.target.id).blur();

  switch (true) {
    // left: decrement
    case e.keyCode === 37:
      currentSq--;
      currentSq = numReset(e, currentSq);
      document.getElementById(currentSq).focus();
      break;
    // right: increment
    case e.keyCode === 39:
      currentSq++;
      currentSq = numReset(e, currentSq);
      document.getElementById(currentSq).focus();
      break;
    // up: +20
    case e.keyCode === 38:
      currentSq = currentSq - 20;
      currentSq = numReset(e, currentSq);
      document.getElementById(currentSq).focus();
      break;
    // down: -20
    case e.keyCode === 40:
      currentSq = currentSq + 20;
      currentSq = numReset(e, currentSq);
      document.getElementById(currentSq).focus();
      break;
  }
};

/**
 * @desc    Fix currentSq focus for numbers
 *          beyond the scope of grid (0 - 499)
 * @params  event, currently focused square id value
 * @return  id of next square to focus, adjusted for grid
 */
const numReset = (e, sq) => {
  switch (true) {
    // left or up arrows at 0
    case (sq === -1 && e.keyCode === 37) || sq === -20:
      sq = 499;
      break;
    // up arrow anywhere else
    case (sq === -1 && e.keyCode === 38) || (sq < -1 && sq !== -1):
      sq = sq + 499;
      break;
    // down arrow anywhere else
    case (sq === 500 && e.keyCode === 40) || sq > 500:
      sq = sq - 499;
      break;
    // down or right arrows at 499
    case sq === 500 || sq === 519:
      sq = 0;
      break;
  }
  return sq;
};
