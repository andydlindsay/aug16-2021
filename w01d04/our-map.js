const ourMap = (arr, cb) => {
  const newArray = [];

  for (const element of arr) {
    const returnVal = cb(element);
    newArray.push(returnVal);
  }

  return newArray;
};

const array1 = [1, 4, 9, 16];
const mapped = ourMap(array1, x => x * 2);

console.log(array1);
console.log(mapped);

const dogs = ['Goldie', 'Rottweiler', 'Rosie'];
const dogBehaviour = (dog) => {
  return `who's a good dog?? ${dog}`;
};

const mappedDogs = ourMap(dogs, dogBehaviour);
console.log(dogs);
console.log(mappedDogs);
