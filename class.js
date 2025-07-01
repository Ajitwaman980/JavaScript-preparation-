class hello {
  #w = 10;
  hello() {
    let a = 10;
    let b = 10;
  }

  #data() {
    console.log(`this is private access ${this.#w}`);
  }
  sum(a, b) {
    console.log(a + b);
    this.#data();
  }
}

const obj = new hello();
obj.sum(1, 2);
// obj.data(); not calling like this private fucntions
