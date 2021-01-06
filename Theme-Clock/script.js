const hourElem = document.querySelector('.hour');
const minuteElem = document.querySelector('.minute');
const secondElem = document.querySelector('.second');
const timeElem = document.querySelector('.time');
const dateElem = document.querySelector('.date');
const toggle = document.querySelector('.toggle');
// these are for preventing the reverse spin of second hand at :59
const needleSecond = document.querySelector('.needle.second');
const needleMinute = document.querySelector('.needle.minute');
const needleHour = document.querySelector('.needle.hour');

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

toggle.addEventListener('click', (e) => {
  const html = document.querySelector('html');
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    e.target.innerHTML('Dark Mode');
  } else {
    html.classList.add('dark');
    e.target.innerHTML('Light Mode');
  }
});

/* range to range mapper - SO user August Miller:
  https://stackoverflow.com/questions/10756313  */
const scale = (num, inMin, inMax, outMin, outMax) => {
  return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};

const setTime = () => {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursAnalog = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const amPm = hours >= 12 ? 'PM' : 'AM';

  /* these three set the hands in motion */
  hourElem.style.transform = `translate(-50%, -100%) 
    rotate(${scale(hoursAnalog, 0, 11, 0, 360)}deg)`;

  minuteElem.style.transform = `translate(-50%, -100%) 
    rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;

  secondElem.style.transform = `translate(-50%, -100%)
    rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;

  /* these next three turn off their respective
    transitions to prevent reverse at :59 */
  needleHour.style.transition = `${hours === 0 ? 'none' : 'all 0.5s ease-in'}`;

  needleMinute.style.transition = `${
    minutes === 0 ? 'none' : 'all 0.5s ease-in'
  }`;

  needleSecond.style.transition = `${
    seconds === 0 ? 'none' : 'all 0.5s ease-in'
  }`;

  timeElem.innerHTML = `${hoursAnalog}:${
    minutes < 10 ? `0${minutes}` : minutes
  } ${amPm}`;

  dateElem.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
};

setTime();

setInterval(setTime, 1000);
