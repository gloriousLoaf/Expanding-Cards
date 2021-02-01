const addBtn = document.getElementById('add');

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
  // from localStorage, set textarea to passed value, use markdown
  textarea.value = text;
  main.innerHTML = marked(text);
  // delete
  deleteBtn.addEventListener('click', () => {
    note.remove();
  });
  // toggle textarea or main
  editBtn.addEventListener('click', () => {
    main.classList.toggle('hidden');
    textarea.classList.toggle('hidden');
  });
  //
  textarea.addEventListener('input', (e) => {
    const { value } = e.target;
    main.innerHTML = marked(value);
  });
  // append
  document.body.appendChild(note);
};

addBtn.addEventListener('click', () => addNewNote());
