// Speakers Section dynamic creation
let counter = 0;
const person = [
  {
    name: 'Margaret Hamilton',
    contribution: 'She at the time served in the capacity of Director Software Engineering Division at Charles Stark Draper Lab and led a team of individuals who built the onboard flight control software for the famous NASA missions namely; Apollo and Skylab.',
    Description: 'Her claim to fame is due to the Apollo mission, in particular. She later aided in the development of ‘Universal Systems Language’ and ‘Development before the Fact’ model. It is to her credit the term “software engineering”',
    img: 'sprites/margaret.png',
  },
  {
    name: 'Donald Knuth',
    contribution: 'His book on the theory of programming earned him all the accolades and much-deserved fame.',
    Description: 'He created the ‘TeX digital typesetting system’. Amidst winning a number of awards, he was named as the ‘Fellow at the Computer History Museum’ in 1998.',
    img: 'sprites/Donald.png',
  },
  {
    name: 'Ken Thompson',
    contribution: 'He won A.M. Turing Award along with Dennis Ritchie in 1983 among other awards. He’s also an inductee at the fellow of Computer History Museum (1997).',
    Description: 'Along with Dennis Ritchie, Ken was the co-creator of UNIX. He is also accredited with creating ‘B-programming language’, the ‘ed(text editor)’, and also was the co-developer of ‘Go’ programming language.',
    img: 'sprites/Ken.jpg',
  },
  {
    name: 'Richard Stallman',
    contribution: 'As his contribution to the open-source software which we use daily for code compilation, he is among the most influential computer programmers in the history.',
    Description: 'Remember the ‘GNU Project’? Well, he is the founder of it along with its tools such as ‘Emacs’, ‘GCC’ etc. He is also the founder of the ‘Free Software Foundation’ and the winner of ACM’s Grace Murray Hopper Award (1990) and EFF’s Pioneer Award (1998).',
    img: 'sprites/richard.png',
  },
  {
    name: 'Niklaus Wirth',
    contribution: 'A Swedish computer programmer and is hailed as one of the pioneers of computer programming. He introduced the renowned programming languages including Pascal, Euler, Algol-W, Modula/Modula-2, and Oberon/Oberon-2/-7.',
    Description: 'Another relatively simpler programming language known as PL/o was also designed by Wirth. PL/o now serves as the foundation for compiler design classes in universities. His contribution in the field of computer programming won him the prestigious Turing Award in ’84.',
    img: 'sprites/Niklaus.png',
  },
  {
    name: 'Dennis Ritchie',
    contribution: 'Dennis Ritchie was a computer scientist and is responsible for setting up the digital era of ours presently. He devised C programming language which is employed by many software applications, operating systems, and has served as the benchmark for the programming languages that followed.',
    Description: 'As mentioned above he co-created UNIX with Ken Thompson. ’83 won him the Turing Award from ACM and several other accolades. Upon his passing the Fedora 16 Linux distribution was released as part of honoring his memory.',
    img: 'sprites/donnald.png',
  },
];

function CreateElement(elementType = '', elementClass = [], father, text = '') {
  const element = document.createElement(elementType);
  elementClass.forEach((styleClass) => {
    element.classList.add(styleClass);
  });
  element.textContent = text;
  father.appendChild(element);
  return element;
}

function GenerateInstance(persona, persona2, container) {
  // Row container
  const div = CreateElement('div', ['flex-row', 'contain'], container);
  // Instance 1
  const indiv = CreateElement('div', ['flex-row', 'hidden'], div);
  const img = CreateElement('img', ['inline'], indiv);
  img.setAttribute('src', persona.img);
  const info = CreateElement('div', ['flex-column', 'info'], indiv);
  CreateElement('h3', ['speakersName'], info, persona.name);
  CreateElement('h4', ['speakersContribution'], info, persona.contribution);
  CreateElement('div', ['guide-speaker'], info);
  CreateElement('p', ['speakersDescription'], info, persona.Description);
  // Instance 2
  const indiv2 = CreateElement('div', ['flex-row', 'hidden'], div);
  const img2 = CreateElement('img', ['inline'], indiv2);
  img2.setAttribute('src', persona2.img);
  const info2 = CreateElement('div', ['flex-column', 'info'], indiv2);
  CreateElement('h3', ['speakersName'], info2, persona2.name);
  CreateElement('h4', ['speakersContribution'], info2, persona2.contribution);
  CreateElement('div', ['guide-speaker'], info2);
  CreateElement('p', ['speakersDescription'], info2, persona2.Description);
  if (counter === 0) {
    indiv.classList.add('exclude');
    indiv2.classList.add('exclude');
    counter += 1;
  }
}

function DisplaySection() {
  const container = CreateElement('div', ['flex-column'], document.body);
  CreateElement('h2', ['section-title', 'align-self-center'], container, 'Developers');
  CreateElement('div', ['guide-bar'], container);
  const speakersContainer = CreateElement('div', ['flex-column'], container);
  for (let index = 0; index < person.length; index += 2) {
    GenerateInstance(person[index], person[index + 1], speakersContainer);
  }
}

function showmore() {
  document.querySelector('.more-button').remove();
  document.querySelectorAll('.flex-row').forEach((item) => {
    item.classList.remove('hidden');
  });
}

document.querySelector('.more-button').addEventListener('click', showmore);
DisplaySection();