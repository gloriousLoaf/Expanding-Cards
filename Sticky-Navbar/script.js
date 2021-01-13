const nav = document.querySelector('.nav');

// when the Y scroll value exceeds threshold, add .active
const fixNav = () => {
  window.scrollY > nav.offsetHeight + 150
    ? nav.classList.add('active')
    : nav.classList.remove('active');
};
window.addEventListener('scroll', fixNav);
