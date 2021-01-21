/* api & dom */
const API_URL = 'https://api.github.com/users/';
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

/* listen, pass submission to getUser, clear form */
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const user = search.value;
  // no blank submission
  user && getUser(user);
  search.value = '';
  search.blur();
});

/* dom manipulation */
// create user card
const userCard = (user) => {
  const cardHTML = `    
    <div class="card">
      <div>
        <img src="${user.avatar_url}" alt="GitHub user avatar" class="avatar">
      </div>
      <div class="userInfo">
        <h2>${user.name}</h2>
        <p>${user.bio !== null ? user.bio : 'No bio available'}</p>
        <ul>
          <li>${user.followers} <strong>Followers</strong></li>
          <li>${user.following} <strong>Following</strong></li>
          <li>${user.public_repos} <strong>Repos</strong></li>
        </ul>
        
        <div id="repos"></div>
      </div>
    </div>
  `;
  main.innerHTML = cardHTML;
};
// get repo links append to #repos in card
const userRepos = (repos) => {
  const reposElem = document.getElementById('repos');
  repos.slice(0, 5).forEach((repo) => {
    const repoLink = document.createElement('a');
    repoLink.classList.add('repo');
    repoLink.href = repo.html_url;
    repoLink.target = '_blank';
    repoLink.innerText = repo.name;
    reposElem.appendChild(repoLink);
  });
};

const errorCard = (msg) => {
  const cardHTML = `
    <div class="card">
      <h3>${msg}</h3>
    </div>
  `;
  main.innerHTML = cardHTML;
};

/* axios to api */
// get data for card, pass username to getRepos
const getUser = async (username) => {
  try {
    const { data } = await axios(API_URL + username);
    userCard(data);
    getRepos(username);
  } catch (err) {
    err.response.status === 404
      ? errorCard(`No profile found for '${username}' 🤷‍♀️`)
      : errorCard('Something went wrong. Try again? 🔍');
  }
};
// get links to repos
const getRepos = async (username) => {
  try {
    const { data } = await axios(API_URL + username + '/repos?sort=created');
    userRepos(data);
  } catch (err) {
    err.response.status === 404
      ? errorCard(`Problem fetching repo links for '${username}' 🤷‍♀️`)
      : errorCard('Something went wrong. Try again? 🔍');
  }
};
