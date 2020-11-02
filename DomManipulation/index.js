// your javascript file
//const container = document.querySelector('#container');

//const content = document.createElement('div');
//content.classList.add('content');
//content.textContent = 'This is the glorious text-content!';

//container.appendChild(content);

const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is neat';
container.appendChild(content);


const para = document.createElement('p');
para.textContent = "Hey I'm Read";
para.setAttribute('style', 'color:red');
container.appendChild(para);

const h3 = document.createElement('h3');
h3.textContent="im blue h3";
h3.setAttribute('style', 'color:blue');
container.appendChild(h3);

const divContent = document.createElement('dv');
const p = document.createElement('p');
const h1 = document.createElement('h1');
divContent.setAttribute('style', 'border:black; background-color:pink');
h1.textContent('im in a div');
p.textContent('me too')
divContent.appendChild(h1);
divContent.appendChild(p);
content.appendChild(divContent);

