// Rest Parameter
//  rest parametor is toallow to functioon to take multiple argumnet

function name(...arg) {
  arg.forEach((element) => {
    console.log("Hello " + element);
  });
}

name("Ajit", "waman", "deepak");
function showNumbers(...nums) {
  console.log(nums);
}

showNumbers(10, 20, 30);
