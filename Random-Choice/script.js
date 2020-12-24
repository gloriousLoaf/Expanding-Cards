const tagsElem = document.getElementById('tags');
const text = document.getElementById('textarea');

text.focus();

/* SPANS - create & append in DOM */
const createTags = (input) => {
  // split on commas, filter whitespace, map without spaces
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim());
  // clear textarea
  tagsElem.innerHTML = '';
  // create spans with class .tag & append below textarea
  tags.forEach((tag) => {
    const tagElem = document.createElement('span');
    tagElem.classList.add('tag');
    tagElem.innerText = tag;
    tagsElem.appendChild(tagElem);
  });
};

/* HELPERS */
// grab tabs nodeList and pick random index
const pickRandom = () => {
  const tags = document.querySelectorAll('.tag');
  return tags[Math.floor(Math.random() * tags.length)];
};
// add highlight class
const highlight = (tag) => {
  tag.classList.add('highlight');
};
// remove highlight class
const unHighlight = (tag) => {
  tag.classList.remove('highlight');
};

/* RANDOMIZER - starts & stops 'animation' & picks winner*/
const randomSelect = () => {
  // the stopping point, used in last setTimeout
  const times = 30;

  // toggle highlight 10x/sec
  const interval = setInterval(() => {
    const randomTag = pickRandom();
    // add
    highlight(randomTag);
    // remove
    setTimeout(() => {
      unHighlight(randomTag);
    }, 100);
  }, 100);

  // end highlighting loop based on const times
  setTimeout(() => {
    clearInterval(interval);
    // pick one to land on, the winner
    setTimeout(() => {
      const randomTag = pickRandom();
      highlight(randomTag);
    }, 100);
  }, times * 100);
};

// listener fires tag creation and runs randomizer on Enter
text.addEventListener('keyup', (e) => {
  createTags(e.target.value);
  // clear textarea and fire randomSelect
  if (e.key === 'Enter') {
    setTimeout(() => {
      e.target.value = '';
    }, 10);
    randomSelect();
  }
});
