const rippleBtns = document.querySelectorAll('.ripple');

rippleBtns.forEach((button) => {
  button.addEventListener('click', function (e) {
    // location of click in viewport
    const x = e.clientX;
    const y = e.clientY;
    // button boundary
    const btnTop = e.target.offsetTop;
    const btnLeft = e.target.offsetLeft;
    // calc location of click inside button
    const xInside = x - btnLeft;
    const yInside = y - btnTop;
    // create span & append
    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px';
    this.appendChild(circle);
    // clean up spans
    setTimeout(() => circle.remove(), 500);
  });
});
