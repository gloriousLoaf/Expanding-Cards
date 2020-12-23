const jokeElem = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

// async/await
const generateJoke = async () => {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };
  const res = await fetch('https://icanhazdadjoke.com', config);
  const data = await res.json();
  jokeElem.innerHTML = data.joke;
};

// For reference, .then() syntax:
// const generateJoke = () => {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   };
//   fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeElem.innerHTML = data.joke;
//     });
// };

generateJoke();

jokeBtn.addEventListener('click', generateJoke);
