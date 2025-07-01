// promise in js its way to handle the asychorouns code

const promise = new Promise((resolved, reject) => {
  const a = 10;
  const b = 10;

  if (a == b) {
    resolved("A and B is equal");
  } else {
    reject("this is wrong");
  }
});

// handle using the then

promise
  .then((mes) => {
    console.log("this working ", mes);
  })
  .catch(() => {
    console.log("failed");
  });
