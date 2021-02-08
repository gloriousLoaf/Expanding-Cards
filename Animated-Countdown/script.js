const nums = document.querySelectorAll('.nums span');
const counter = document.querySelector('.counter');
const final = document.querySelector('.final');
const replay = document.getElementById('replay');

const runAnimation = () => {
  nums.forEach((num, i) => {
    const penultimate = nums.length - 1;
    num.addEventListener('animationend', (e) => {
      if (e.animationName === 'rollIn' && i !== penultimate) {
        num.classList.remove('in');
        num.classList.add('out');
      } else if (e.animationName === 'rollOut' && num.nextElementSibling) {
        num.nextElementSibling.classList.add('in');
      } else {
        counter.classList.add('hide');
        final.classList.add('show');
      }
    });
  });
};

const resetDOM = () => {
  counter.classList.remove('hide');
  final.classList.remove('show');
  nums.forEach((num) => {
    num.classList.value = '';
  });
  nums[0].classList.add('in');
};

runAnimation();

replay.addEventListener('click', () => {
  resetDOM();
  runAnimation();
});
