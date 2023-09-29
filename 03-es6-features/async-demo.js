async function f() {
  return new Promise((resolve, reject) => setTimeout(resolve, 3000, "Data from my web service ..."));
  // return new Promise((resolve, reject) => setTimeout(reject, 3000, "Rejected with Error!"));
  // return Promise.resolve(1);
}
async function g() {
  // return Promise.reject("Error!!!");
  throw "Error!!!";
  // return 42;
}

// console.log(g());

Promise.all([f(), g()])
  .then(v => console.log(v))
  .catch(err => console.log("Rejected:" + err))
  .finally(() => console.log("Finished."));

// f().then(v => console.log(v));
