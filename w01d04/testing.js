const user = {
  username: 'john',
  password: '1234'
};

// Object.keys(user).forEach(key => {
//   console.log(key, user[key]);
// });

Object.keys(user).forEach(key => console.log(key, user[key]));


const myArr = [1,2,3];
myArr.secretMessage = 'hi';
console.log(myArr);
console.log(myArr.length);
console.log(myArr.secretMessage);

console.log('-------');

let str = "abc"; //I think primitive data type is not allow get a key value property(?).
str.secretMsg = "Can I store it?"; //Why doesn't it show any error? / Just ignored?
console.log(str);
console.log(str.secretMsg);
console.log(typeof str);
console.log(str.length);

