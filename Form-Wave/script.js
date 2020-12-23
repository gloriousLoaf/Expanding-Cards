const labels = document.querySelectorAll('.formControl label');

// split label into array & map letter to a span, then rejoin
// span style uses index * 50 for ms value
labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split('')
    .map(
      (letter, i) =>
        `<span style="transition-delay:${i * 50}ms">${letter}</span>`
    )
    .join('');
});
