const boxes = document.querySelectorAll('.box');

const checkBoxes = () => {
  // trigger point, fraction of window height
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    // DOMRect
    const boxTop = box.getBoundingClientRect().top;
    // if less, add .show to slide in. else remove
    boxTop < triggerBottom
      ? box.classList.add('show')
      : box.classList.remove('show');
  });
};

// fire on load to show first content that's < triggerBottom
checkBoxes();

window.addEventListener('scroll', checkBoxes);
