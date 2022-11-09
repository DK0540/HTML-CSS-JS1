//callback-->

// function greet(name) {
//   console.log("hi " + " " + name);
// }

// greet("peter");

// //function
// function greet(name, callback, callBack2) {
//   console.log("hi " + " " + name);
//   callBack2();
//   callback();
//   console.log("hello world");
// }

// //callback function
// function callMe() {
//   console.log("I am callBack function");
// }

// function callMe2() {
//   console.log("Iam second callback");
// }

// //passing function as an argument
// greet("Shubam", callMe2, callMe);
//------------------------------------------->>
//callback function

function greet(name, myFunction) {
  console.log("hello world");
  myFunction(name);
}

//callback function
function sayName(name) {
  console.log("hello" + " " + name);
}

setTimeout(greet, 4000, "John", sayName);
