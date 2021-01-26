const text = document.getElementById('text');
const speed = document.getElementById('speed');
const textVal = 'Web development is dope.';
let idx = 1;
let typeSpeed = 300 / speed.value;

const writeText = () => {
  text.innerText = textVal.slice(0, idx);
  idx++;
  if (idx > textVal.length) idx = 1;

  setTimeout(writeText, typeSpeed);
};

speed.addEventListener('input', (e) => (typeSpeed = 300 / e.target.value));

writeText();
