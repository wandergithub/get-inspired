// Mobile menu interacction
let menuBtn = document.getElementById('menuBtn');
// Quit Menu
function QuitMenu() {
    document.querySelectorAll('.mobileMenu').forEach(element => {
        element.remove();
    });
}
// Display mobile Menu
function DisplayMenu() {
    let menu = document.createElement('div');
    document.querySelector('body section').appendChild(menu);
    menu.classList.add('mobileMenu');
    let container = document.createElement('div');
    container.classList.add('menuContainer');
    menu.appendChild(container);
    let quitBtn = document.createElement('i');
    container.appendChild(quitBtn);
    quitBtn.classList.add('fa-solid', 'fa-x', 'icon-list','fa-2x');
    quitBtn.addEventListener('click', QuitMenu);
    let home = document.createElement('a');
    let about = document.createElement('a');
    let program = document.createElement('a');
    let join = document.createElement('a');
    let Sponsor = document.createElement('a');
    let News = document.createElement('a');
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
    News.textContent = "News";
    home.classList.add('aLinks');
    about.classList.add('aLinks');
    program.classList.add('aLinks');
    join.classList.add('aLinks');
    Sponsor.classList.add('aLinks');
    News.classList.add('aLinks');
    home.setAttribute('href','../index.html')
    about.setAttribute('href','templates/about.html')
    program.setAttribute('href','#topics')
    join.setAttribute('href','#')
    Sponsor.setAttribute('href','#')
    News.setAttribute('href','#')
}
menuBtn.addEventListener('click', DisplayMenu);
