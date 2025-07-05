// Set
// question remove the all duplicate  from the array
const arr = [1, 1, 1, 22, 22, 22, 33, 33, 5];

//  we used the set method
const removeduplicat = new Set(arr);

// convert into the array

const uniquearr = [...removeduplicat];

console.log(uniquearr);
