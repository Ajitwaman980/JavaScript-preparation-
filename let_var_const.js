// let const and var

// let a = 1;
const b = 2;
var c = 10;

function demo() {
  // let is block scope
  if (true) {
    let d = 20;
    const e = 12;
    var f = 10;
    console.log(d);
    console.log(e);
  }
  console.log(f);
  // console.log(e);
}

demo();

//  == ===

const x = 1;
const y = 1;
let z = "1";

if (x === z) {
  console.log("true");
} else {
  console.log("false");
}
