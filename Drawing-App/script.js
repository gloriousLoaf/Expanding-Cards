// dom - canvas and context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
// vars from user input
let size = 20;
let color = 'black';
let x, y;

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
  ctx.lineWidth = size;
  ctx.stroke();
};
