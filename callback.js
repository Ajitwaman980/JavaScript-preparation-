// call back

function sum(a, b) {
  console.log(a + b);
}

function input(a, b, callback) {
  callback(a, b);
}

function div(a, b) {
  console.log("the div is the ", a / b);
}
function input2(a, b, callback) {
  callback(a, b);
}
input(1, 3, sum);

input2(1, 3, div);

// used the arrow functions

input(3, 3, (a, b) => {
  console.log(a + b);
});
