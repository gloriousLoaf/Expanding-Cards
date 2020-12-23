const toggles = document.querySelectorAll('.faqToggle');

toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active');
  });
});
