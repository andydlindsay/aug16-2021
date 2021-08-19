// function sayHello() {}

const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

// sayHello('Alice');

const anotherFunction = sayHello;
// const anotherFunction = sayHello();


// const yetAgain = anotherFunction;
// anotherFunction('Bob');

// console.log(sayHello.toString());
// console.log(anotherFunction);

const functions = [sayHello];

// functions[0]('Carol');

console.log(sayHello);
sayHello.secretMessage = 'hi there';
// console.log(sayHello.secretMessage);
// console.log(sayHello.toString());
console.log(sayHello);
