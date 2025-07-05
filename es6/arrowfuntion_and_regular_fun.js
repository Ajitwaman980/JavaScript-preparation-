// var name = "helo";
global.name = "ajit outside";
const obj = {
  name: "Ajit ",
  regularFunc: function () {
    console.log("Regular:", this.name); // this = obj
  },
  arrowFunc: () => {
    console.log("Arrow:", name); // this = outer (not obj)
  },
};

obj.regularFunc(); // Regular: Ali
obj.arrowFunc(); // Arrow: undefined
