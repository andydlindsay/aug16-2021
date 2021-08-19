// const sayHello = function(name) {
//   console.log(`hello there ${name}`);
// };

// function() {}
// () => {}

// standard arrow function syntax
// const sayHello = (name) => {
//   console.log(`hello there ${name}`);
// };

// single argument
// const sayHello = name => {
//   console.log(`hello there ${name}`);
// };

// sayHello('Alice');

// if there's only one line, you can omit the curly braces {}
// const sayHello = name => 
//   console.log(`hello there ${name}`);

// sayHello('Alice');

const sayHello = name => `hello there ${name}`;

// const sayHello = name => {
//   return `hello there ${name}`;
// }

const returnValue = sayHello('Alice');
console.log('returnVal:', returnValue);

// try {
//   // do this stuff
//   throw new Error('haaaaalp!!!');
// } catch (err) {
//   console.log('inside catch block');
//   // console.log(err);
// }

// console.log('do we see this????');

// if (error) throw error;

// if (error) {
//   throw error;
// }

// if (error)
//   throw error;
