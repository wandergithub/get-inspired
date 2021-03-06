// Mobile menu interacction
const menuBtn = document.getElementById('menuBtn');
// Quit Menu
function QuitMenu() {
  document.querySelectorAll('.mobileMenu').forEach((element) => {
    element.remove();
  });
}
// Display mobile Menu
function DisplayMenu() {
  const menu = document.createElement('div');
  document.querySelector('body section').appendChild(menu);
  menu.classList.add('mobileMenu');
  const container = document.createElement('div');
  container.classList.add('menuContainer');
  menu.appendChild(container);
  const quitBtn = document.createElement('i');
  container.appendChild(quitBtn);
  quitBtn.classList.add('fa-solid', 'fa-x', 'icon-list', 'fa-2x');
  quitBtn.addEventListener('click', QuitMenu);
  const home = document.createElement('a');
  const about = document.createElement('a');
  const program = document.createElement('a');
  const join = document.createElement('a');
  const Sponsor = document.createElement('a');
  const News = document.createElement('a');
  container.appendChild(home);
  container.appendChild(about);
  container.appendChild(program);
  container.appendChild(join);
  container.appendChild(Sponsor);
  container.appendChild(News);
  home.textContent = 'Home';
  about.textContent = 'About';
  program.textContent = 'Program';
  join.textContent = 'Join';
  Sponsor.textContent = 'Sponsor';
  News.textContent = 'News';
  home.classList.add('aLinks');
  about.classList.add('aLinks');
  program.classList.add('aLinks');
  join.classList.add('aLinks');
  Sponsor.classList.add('aLinks');
  News.classList.add('aLinks');
  home.setAttribute('href', '/get-inspired/index.html');
  about.setAttribute('href', '/get-inspired/templates/about.html');
  program.setAttribute('href', '#topics');
  join.setAttribute('href', '#');
  Sponsor.setAttribute('href', '#');
  News.setAttribute('href', '#');
}
menuBtn.addEventListener('click', DisplayMenu);
