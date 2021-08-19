const runMyFunction = function(anotherFunction) {
  console.log(anotherFunction);
  console.log(anotherFunction.toString());
  anotherFunction('Dean'); // addTwo('Dean');
};

// const sayHello = function(name) {
//   console.log(`hello there ${name}`);
// };

// const username = 'Elise';
// sayHello(username);
// sayHello('Frank');

runMyFunction(function(firstName) {
  console.log(`did this work? ${firstName}?`);
});
