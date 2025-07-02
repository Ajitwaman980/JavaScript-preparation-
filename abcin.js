// abc -> apply bind call funtion that used for the control the this value

function name(age) {
  console.log("my name is", this.name, "and my age is ", age);
}
const person = { name: "Ajit" };
name.call(person, 1);
name.apply(person, [21]);
const newfunction = name.bind(person, 34);
newfunction();

function syhello() {
  console.log("hello ", this.name);
}
syhello.call(person);
