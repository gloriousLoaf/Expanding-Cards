// dom - canvas and context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// vars for user input
let size = 20;
let isPressed = false;
let color = 'black';
let x, y;

// mouse events - is mouse clicked, and where?
canvas.addEventListener('mousedown', (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});
canvas.addEventListener('mouseup', (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});
canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    // draw circle & line, creates rounded end
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    // reset x & y to current mousemove positions,
    // create proper curved line
    x = x2;
    y = y2;
  }
});

const drawCircle = (x, y) => {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
};

// moveTo x1, y1 + lineTo x2, y2 (draws line)
const drawLine = (x1, y1, x2, y2) => {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
};
