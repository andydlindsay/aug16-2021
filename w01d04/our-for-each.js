// arr.forEach
const ourForEach = (arr, cb) => {
  for (const element of arr) {
    cb(element);
  }
};

const apples = ['golden delicious', 'spartan', 'gala', 'granny smith', 'fuji'];

const appleCallback = (apple) => {
  console.log(`I love ${apple} apples`);
};

ourForEach(apples, appleCallback);

apples.forEach(appleCallback);

console.log();

const dogs = ['Goldie', 'Rottweiler', 'Rosie'];

ourForEach(dogs, (dog) => {
  console.log(`It's time to feed ${dog}!`);
});
