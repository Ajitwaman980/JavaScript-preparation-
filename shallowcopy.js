// shallow copy

var array = [1, 2, 3, 4, 5];
console.log(array);
const newarray = [...array];
// console.log(newarray.push(12));
newarray.push(123);
console.log(newarray);
console.log(array);

let original = [{ name: "Alice" }];
let copy = [...original];
console.log(copy);
