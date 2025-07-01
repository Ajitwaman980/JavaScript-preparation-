const array = [1, 2, 3, 4, 5];
console.log(array);
let sum = 0;
const sumofarray = array.map(function (e) {
  e = e * 2;
  return e;
});
console.log(sumofarray);
