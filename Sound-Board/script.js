const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach((sound) => {
  // create button elem for each sound
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;
  // listeners
  btn.addEventListener('click', () => {
    stopSongs();
    // built in audio api method
    document.getElementById(sound).play();
  });
  // append in DOM
  document.getElementById('buttons').appendChild(btn);
});

const stopSongs = () => {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    // audio api does not have stop, so pause & reset
    song.pause();
    song.currentTime = 0;
  });
};
