// reverse the string

let str = ["h", "e", "l", "l", "o"];
// ["o","l","l","e","h"]
// console.log(str.split(" ").reverse().join(" ").trim());

// function to reverse the string without using built-in reverse method
function reverse(str) {
  var reversedStr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr.push(str[i]);
  }
  return reversedStr;
}
console.log(reverse(str));
