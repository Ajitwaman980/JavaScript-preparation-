//  arrye is the collection of multiple values ...may this vlaue no , string ,function

var arr = [1, 2, 3, 4, 5];

console.log(arr);

// methods
// slice within the range we access the data
var newarray = arr.slice(0, 3);
console.log(newarray);

//  push -> add into the array
console.log(arr.push(6));
console.log(arr);
//  pop -> remove into the array
console.log("the pop Element", arr.pop());
console.log(arr);
// 	Returns the number of items
console.log(arr.length);
