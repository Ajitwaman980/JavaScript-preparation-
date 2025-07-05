// using the arrow funtion
// the arrow fun is are a short wway to write the fun
//  main difference btwen ={} and simpel fun is the in arrow function donthave access the this key word but
// in the tradtional fun we why access this keywords

const add = (x, y) => {
  return x + y;
};
console.log(add(1, 2));

//  take exmaple with obj

global.name = "ajit outside";

const obj = {
  name: "ajit",
  getname: () => {
    console.log(name);
  },
};

obj.getname();
