const smallCups = document.querySelectorAll('.cupSmall');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

/* SMALL CUPS - toggling .full class,
  based on user click and fill status */
const highlightCups = (i) => {
  // before toggle loop below: check if the clicked cup is already full
  // AND the next one up is not, so user can toggle a full cup to empty
  smallCups[i].classList.contains('full') &&
    !smallCups[i].nextElementSibling.classList.contains('full') &&
    i--;

  // for each index (i2) up to & including the index clicked (i)
  smallCups.forEach((cup, i2) => {
    // add or remove .full to i and each i2 before it
    i2 <= i ? cup.classList.add('full') : cup.classList.remove('full');
  });
};

smallCups.forEach((cup, i) => {
  cup.addEventListener('click', () => highlightCups(i));
});
