/* dom */
const resultElem = document.getElementById('result');
const lengthElem = document.getElementById('length');
const lowerElem = document.getElementById('lowercase');
const upperElem = document.getElementById('uppercase');
const numbersElem = document.getElementById('numbers');
const symbolsElem = document.getElementById('symbols');
const generateElem = document.getElementById('generate');
const clipboardElem = document.getElementById('clipboard');

/* use char codes to get a random values */
const randomLower = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};
const randomUpper = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};
const randomNumber = () => {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 97);
};
/* same idea but from this string */
const randomSymbol = () => {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols[Math.floor(Math.random() * symbols.length)];
};
/* helper to access randomizers */
const randomParams = {
  lower: randomLower,
  upper: randomUpper,
  number: randomNumber,
  symbol: randomSymbol,
};

/* new trick, adding + to front of vars that hold
  string values converts them to numbers! */
generateElem.addEventListener('click', () => {
  const length = +lengthElem.value;
  const hasLower = lowerElem.checked;
  const hasUpper = upperElem.checked;
  const hasNumber = numbersElem.checked;
  const hasSymbol = symbolsElem.checked;
  resultElem.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

const generatePassword = (lower, upper, number, symbol, length) => {
  let generatedP = '';
  const typesCount = lower + upper + number + symbol;
  // filter false values
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );
  // must check at least 1 param
  if (typesCount === 0) return '';
  /**
   * loop through randomParams per length of desired password;
   * append random chars from the randomizer funcs per matching idx;
   * return created generatedP
   */
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const paramFuncs = Object.keys(type)[0];
      generatedP += randomParams[paramFuncs]();
    });
  }
  const newPassword = generatedP.slice(0, length);
  return newPassword;
};

clipboardElem.addEventListener('click', () => {
  const textarea = document.createElement('textarea');
  const password = resultElem.innerText;
  if (!password) return;
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Password copied to clipboard!');
});
