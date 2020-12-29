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

  // Toggle: forEach previous index (i2) up to & including the index clicked (i),
  smallCups.forEach((cup, i2) => {
    // add or remove .full to i & each i2 before it
    i2 <= i ? cup.classList.add('full') : cup.classList.remove('full');
  });

  // finally, update total
  updateBigCup();
};

/* BIG CUP */
const updateBigCup = () => {
  // get total number of full cups
  const fullCups = document.querySelectorAll('.cupSmall.full').length;
  // total possible - always 8 for now but could change the app, right?
  const totalCups = smallCups.length;

  // when no cups clicked, hide percentage
  if (fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    // show and set height to fullCups divided by 8, times big cup
    // height to get a proper ratio. and set text to percentage
    percentage.style.visibility = 'visible';
    percentage.style.height = `${(fullCups / totalCups) * 20.5}rem`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  // if full, remove the 'Remained'
  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    // show and set liters to the goal of 2 minus the cups clicked
    remained.style.visibility = 'visible';
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
};

// On load, update total
updateBigCup();

smallCups.forEach((cup, i) => {
  cup.addEventListener('click', () => highlightCups(i));
});
