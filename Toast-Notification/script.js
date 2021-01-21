// dom
const button = document.getElementById('button');
const toasts = document.getElementById('toasts');
// toast content: msg & css
const messages = [
  'Message One',
  'Message Two',
  'Message Three',
  'Message Four',
];
const types = ['info', 'success', 'error'];

// make toast divs with random msg by passing nothing,
// or pass specific msg and/or css class
const createNotification = (msg = null, type = null) => {
  const note = document.createElement('div');
  note.classList.add('toast');
  note.classList.add(type ? type : randomType());
  note.innerText = msg ? msg : randomMsg();
  // append then remove
  toasts.appendChild(note);
  setTimeout(() => {
    note.remove();
  }, 2500);
};

// msg & css type randomizer
const randomMsg = () => {
  return messages[Math.floor(Math.random() * messages.length)];
};
const randomType = () => {
  return types[Math.floor(Math.random() * types.length)];
};

// listener - can pass contextual message to createNotification
button.addEventListener('click', () => createNotification());
