// function Book(title, author, pages, read) {
//     this.title = title
//     this.author = author
//     this.pages = pages
//     this.read = read

//     this.info = () => {
//         let status = '';
//         if (read) {
//             status = 'has been read';
//         } else {
//             status = 'has not been read';
//         }
//         return `${title} by ${author}, ${status}`;
//     }
// }

// const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false)
// console.log(theHobbit.info());

// let animal = {
//     eats: true
//   };
//   let rabbit = {
//     jumps: true
//   };
  
//   rabbit.__proto__ = animal; // (*)
  
//   // we can find both properties in rabbit now:
//   console.log( rabbit.eats ); // true (**)
//   console.log( rabbit.jumps ); // true


//   let head = {
//     glasses: 1
//   };
  
//   let table = {
//     __proto__: head,
//     pen: 3
//   };
  
//   let bed = {
//     __proto__: table,
//     sheet: 1,
//     pillow: 2
//   };
  
//   let pockets = {
//     __proto__: bed,
//     money: 2000
//   };

// console.log(pockets.glasses)

// console.log('\n\n\n\n')

// function Student() {
// }

// Student.prototype.sayName = function() {
//   console.log(this.name)
// }

// Student.prototype.poop = () => console.log('poop')

// function EighthGrader(name) {
//   this.name = name
//   this.grade = 8
// }

// EighthGrader.prototype = Object.create(Student.prototype)

// const carl = new EighthGrader("carl")
// carl.sayName() // console.logs "carl"
// carl.poop()
// console.log(carl.grade) // 8


////////////////// Factory Functions //////////////////

// const personFactory = (name, age) => {
//   const sayHello = () => console.log('Hello, ' + name)
//   return { name, age, sayHello};
// };

// const joel = personFactory('Joel', 27);
// console.log(joel.name)
// joel.sayHello();

// const name = "Maynard"
// const color = "red"
// const number = 34
// const food = "rice"

// // logging all of these variables might be a useful thing to do,
// // but doing it like this can be somewhat confusing.
// console.log(name, color, number, food) // Maynard red 34 rice

// // if you simply turn them into an object with brackets,
// // the output is much easier to decipher:
// console.log({name, color, number, food})
//  // { name: 'Maynard', color: 'red', number: 34, food: 'rice' }


// const factoryFunction = string => {
//   const capitalizeString = () => string.toUpperCase();
//   const printString = () => console.log(`----${capitalizeString()}-----`);
//   return { printString }
// }

// const taco = factoryFunction('taco');
// taco.printString()


// const counterCreator = () => {
//   let count = 0;
//   return () => {
//     console.log(count);
//     count++;
//   };
// };

// counterCreator();

// const Player = (name, level) => {
//   let health = level * 2;
//   const getLevel = () => level;
//   const getName = () => name;

//   const die = () => {
//     console.log(`${name} has died`)
//   };

//   const damage = x => {
//     health -= x;
//     if (health <= 0) {
//       die();
//     }
//   };

//   const attack = enemy => {
//     if (level < enemy.getLevel()) {
//       damage(1);
//       console.log(`${enemy.getName()} has damaged ${name}`);
//     }

//     if (level > enemy.getLevel()) {
//       enemy.damage(1);
//       console.log(`${name} has damaged ${enemy.getName()}`);
//     }
  
//   };

//   return { attack, damage, getLevel, getName}
// };

// const jimmie = Player('jim', 10);
// const goblin = Player('gobly', 5);

// jimmie.attack(goblin)



// const Person = (name) => {
//   const sayName = () => console.log(`my name is ${name}`)
//   return {sayName}
// }

// const Nerd = (name) => {
//   // simply create a person and pull out the sayName function with destructuring assignment syntax!
//   const {sayName} = Person(name)
//   const doSomethingNerdy = () => console.log('nerd stuff')
//   return {sayName, doSomethingNerdy}
// }


// const jeff = Nerd('jeff')

// jeff.sayName(); //my name is jeff
// jeff.doSomethingNerdy(); // nerd stuff


// (function () {
//   var foo = "bar";

//   // Outputs: "bar"
//   console.log(foo);
// })();

// // ReferenceError: foo is not defined
// //console.log(foo);


// var myModule = (function() {
//   'use strict';

//   return {
//     publicMethod: function() {
//       console.log('Hello World!');
//     }
//   };
// })();

// myModule.publicMethod(); // outputs 'Hello World'
// // if not IIFE it would have to be myModule().publicMethod();




// var myModule = (function() {
//   'use strict';

//   var _privateProperty = 'Hello World 2';
//   var publicProperty = 'I am a public property';

//   function _privateMethod() {
//     console.log(_privateProperty);
//   }

//   function publicMethod() {
//     _privateMethod();
//   }

//   // no object shorthand 
//   // object shorthand works like this
//   // return {publicmethod, publicProperty}
//   // https://www.theodinproject.com/courses/javascript/lessons/factory-functions-and-the-module-pattern
//   return {
//     publicMethod: publicMethod,
//     publicProperty: publicProperty
//   };
// })();

// myModule.publicMethod(); // outputs 'Hello World'
// console.log(myModule.publicProperty); // outputs 'I am a public property'
// //console.log(myModule._privateProperty); // is undefined protected by the module closure
// //myModule._privateMethod(); // is TypeError protected by the module closure

// const Formatter = (function() {
//   const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);
//   const timesRun = [];
  
//   const makeUpperCase = (text) => {
//     log("Making uppercase");
//     timesRun.push(null);
//     return text.toUpperCase();
//   };

//   return {makeUpperCase, timesRun}

// })();

// console.log(Formatter.makeUpperCase("tomek"));
// console.log(Formatter.timesRun.length);
// console.log(Formatter.timesRun = [1,2,4, 69]);
// console.log(Formatter.timesRun.length);

////////////////// END Factory Functions //////////////////


console.clear()

import moment from 'moment';

console.log("Hello from JavaScript!");
console.log(moment().startOf('day').fromNow());

let name = "Bob", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);
name = 'Joel'
time = "tomorrow"

console.log(`Hello ${name}, how are you ${time}?`);


// object literal
// const book = {
//     title: "Hippie",    
//     author: "Paulo Coelho",  
//     year: "2018"
//  }

 //obj constuctor
//  function Book(title, author, year) { 
//     this.title = title; 
//     this.author = author; 
//     this.year = year;
//  }

// const book2 = new Book ('Hippie', 'Paulo Coelho', '2018');
// console.log(book2);

// console.log(Boolean(book1 instanceof Book))

//creates new object using existing object as prototype
// const Book1 = { 
//     summary : function() { 
//        console.log(`${this.title} is written by ${this.author}.`)
//     }
//  }

// const bookb = Object.create(Booka);
// bookb.author = "Paulo Coelho";
// bookb.title = "Hippie";

//Prototypal inheritance
// let Corebook = function(title) {
//    this.title = title
//  }
//  Corebook.prototype.title = function() {
//    console.log(`name of the book is ${this.title}`);
//  }
//  Corebook.prototype.summary = function(author) {
//    console.log(`${this.title} is written by ${this.author}`);
//  }
//  let Book = function(title, author) {
//    Corebook.call(this, title, author)
//  }
//  Book.prototype = Object.create(Corebook.prototype);
//  let book1 = new Book('The Alchemist', 'Paulo Coelho');
//  book1.title();

//  book1.summary();


 // coposition
 const getTitle = (data) => ({
   title : () => console.log(`title : ${data.title}`)
});
const getAuthor = (data) => ({
   author : () => console.log(`author: ${data.author}`)
});
const getSummary = () =>  ({
   summary :() => console.log(`book summary need to update.`)
});
const Book = (title, author) => {
   const data = { 
      title, 
      author  
   }
   
   return Object.assign({},
             getTitle(data), 
             getAuthor(data), 
             getSummary()
   )
}
let book1 = Book('The Alchemist', 'Paulo Coelho');