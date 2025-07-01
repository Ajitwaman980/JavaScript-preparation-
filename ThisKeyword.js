// this is key wordd that refers to the object that exteuting the current funtion

const person = {
  name: "Ajit",
  show: function () {
    console.log(this.name);
  },
};

person.show();
