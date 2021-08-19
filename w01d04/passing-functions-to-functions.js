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

runMyFunction(sayHello);
runMyFunction(addTwo);
