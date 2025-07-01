// closure
// What is closure?
// A closure is a function that allows access to variables from its outer function and global variables

function x() {
  for (let j = 1; j <= 5; j++) {
    setTimeout(() => {
      console.log(j);
    }, 1000);
  }
}

x();

function outer() {
  let a = 10;
  console.log("...outer then done exeutions");
  function inner() {
    console.log(a);
  }
  return inner;
}

const result = outer();
console.log("...outer then done exeutions");

setTimeout(() => {
  result();
}, 3000);
result();
