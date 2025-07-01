const hello = (name) => {
  console.log(name);
};
hello("Ajit waman");
const person = {
  name: "Ajit",
  hello: function () {
    console.log(this.name);
  },
};

person.hello();
