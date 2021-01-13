// unique dom elems
const header = document.getElementById('header');
const title = document.getElementById('title');
const text = document.getElementById('text');
const profile_img = document.getElementById('profile_img');
const authName = document.getElementById('name');
const date = document.getElementById('date');
// node list elems for animation
const animated = document.querySelectorAll('.animated');
const animatedText = document.querySelectorAll('.animatedText');

const getData = () => {
  // header image
  header.innerHTML = `<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="Laptop in the style of Apple Macbook">`;
  // card text content
  title.innerHTML = 'Web Development on a Budget';
  text.innerHTML = `Do all developers use $2000 laptops? Do I really need three monitors? <a href="#">More...</a>`;
  // author name & pic
  profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/women/45.jpg" alt="A woman, the author of this post">`;
  authName.innerHTML = 'Rita Fires';
  // pub date
  const today = new Date();
  const dateOpt = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };
  const published = today.toLocaleDateString('en-US', dateOpt);
  date.innerText = published;

  // animation!
  animated.forEach((bg) => bg.classList.remove('animated'));
  animatedText.forEach((bg) => bg.classList.remove('animatedText'));
};

setTimeout(getData, 2500);
