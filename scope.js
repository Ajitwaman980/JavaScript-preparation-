// there are two type of scope global scope and localscope

var a = 10; // goblal scope
console.log(a);
(function () {
  var b = 11;
  console.log(a);
  console.log(b); //local scope
})();

console.log(b); /// getting error
