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

const divContent = document.createElement('div');
const p = document.createElement('p');
const h1 = document.createElement('h1');
divContent.setAttribute('style', 'border:black; background-color:pink');
h1.textContent = 'im in a div';
p.textContentextContent ='me too';
divContent.appendChild(h1);
divContent.appendChild(p);
content.appendChild(divContent);


const btn = document.querySelector('#btn');
btn.onclick = () => alert("hello world");


const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {alert('a hello world')});

// adding named functions //
function alertFunction() {
    alert("Yay!")
};
// method 2
btn.onclick=alertFunction;
// method 3
btn2.addEventListener('click', alertFunction);
btn2.addEventListener('click', e => console.log(e));

//
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', function(e) {
    console.log(e.target);
    e.target.style.background = 'blue';
});



// topic of callbacks
// https://briggs.dev/blog/understanding-callbacks
function myEventHandler(event) {
    console.log(event)
}

btn2.addEventListener('click', myEventHandler)

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
      alert(button.id)
      //button.disabled = true;
  });
});