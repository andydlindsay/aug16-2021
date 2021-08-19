const runMyFunction = function(anotherFunction) {
  console.log(anotherFunction);
  console.log(anotherFunction.toString());
  anotherFunction('Dean'); // addTwo('Dean');
};

const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

const addTwo = function(num) {
  console.log(num + 2);
};

const myNumber = 5;
addTwo(myNumber);
addTwo(4);

runMyFunction(sayHello);
runMyFunction(addTwo);
