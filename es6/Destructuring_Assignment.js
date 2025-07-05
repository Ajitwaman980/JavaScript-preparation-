// destructuring the assigment
const obj = {
  name: "ajit waman",
  age: 21,
  gender: "male",
  height: 180,
  weight: 100,
  dgree: "BE",
};

// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.gender);
// console.log(obj.weight);
// console.log(obj.height);
const name1 = obj.name;
console.log(name1);

const { name, age, gender } = obj;

console.log(name);
