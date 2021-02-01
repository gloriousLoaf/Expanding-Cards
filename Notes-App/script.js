const addBtn = document.getElementById('add');

/**
 * create note divs, with .hidden per state of UI;
 * hide main when textarea in reverse & vice-versa.
 * set textarea to passed value, use markdown for main
 * listeners to delete, edit and display in UI + store
 */
const addNewNote = (text = '') => {
  const note = document.createElement('div');
  note.classList.add('note');
  note.innerHTML = `
    <div class="tools">
      <button class="edit">
        <i class="fas fa-edit"></i>
      </button>
      <button class="delete">
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>
    <div class="main ${text ? '' : 'hidden'}"></div>
    <textarea class="${text ? 'hidden' : ''}"></textarea> 
  `; // if .main has text, reveal else hide; opposite for textarea

  const editBtn = note.querySelector('.edit');
  const deleteBtn = note.querySelector('.delete');
  const main = note.querySelector('.main');
  const textarea = note.querySelector('textarea');
  // display approriate values, raw or markdown
  textarea.value = text;
  main.innerHTML = marked(text);
  // delete & update storage
  deleteBtn.addEventListener('click', () => {
    note.remove();
    updateStorage;
  });
  // toggle textarea or main
  editBtn.addEventListener('click', () => {
    main.classList.toggle('hidden');
    textarea.classList.toggle('hidden');
  });
  // use marked to set main to value of textarea
  textarea.addEventListener('input', (e) => {
    const { value } = e.target;
    main.innerHTML = marked(value);
    updateStorage();
  });
  // append
  document.body.appendChild(note);
};

const updateStorage = () => {
  const notesText = document.querySelectorAll('textarea');
  const notes = [];
  notesText.forEach((note) => notes.push(note.value));
  localStorage.setItem('notes', JSON.stringify(notes));
};

// get previous notes from storage
const notes = JSON.parse(localStorage.getItem('notes'));
notes && notes.forEach((note) => addNewNote(note));
addBtn.addEventListener('click', () => addNewNote());
