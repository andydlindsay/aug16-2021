const ourFilter = (arr, cb) => {
  const newArray = [];

  for (const element of arr) {
    const returnVal = cb(element);
    if (returnVal) {
      newArray.push(element);
    }
  }

  return newArray;
};

// const arr = [1,2,3,4,5];
// const filter = (num) => num >= 3;
// const filted = function(num) {
//   return num >= 3;
// };

// const filtered = ourFilter(arr, filter);
// console.log(filtered);

const users = [
  {
    username: 'Alice',
    password: '1234'
  },
  {
    username: 'Bob',
    password: '1234567'
  },
  {
    username: 'Carol',
    password: '1234567'
  },
];

const filteredFunction = (user) => {
  if (user.password.length > 4) {
    return true;
  }
};

const filteredUsers = ourFilter(users, filteredFunction);
console.log(filteredUsers);
