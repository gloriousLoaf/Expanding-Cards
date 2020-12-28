const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
  counter.innerText = '0';

  const updateCounter = () => {
    // using + instead of wrapping in Number() of parseInt()
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    // getting an incrementer based on target value
    const increment = target / 200;

    if (count < target) {
      counter.innerText = `${Math.ceil(count + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});
