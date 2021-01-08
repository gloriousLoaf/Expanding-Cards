const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

empties.forEach((empty) => {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
});

/* drag events - see MDN docs for details */
// when picked up, add hold and invisible,
// needs setTimeout with dumby class to make parent div white
function dragStart() {
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
}
// adds image to landing div
function dragEnd() {
  this.className = 'fill';
}
// override default drag behaviour
function dragOver(e) {
  e.preventDefault();
}
// dashed border, grey background
function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}
// clear dragEnter styles
function dragLeave() {
  this.className = 'empty';
}
function dragDrop() {
  this.className = 'empty';
  this.append(fill);
}
