//Javacsript scope

// var a = 10;
// let k = 22;
// const o = 100;

// console.log(o);

// 1> Global scope
// 2> Functional scope
// 3> Block scope

// 1> Global scope -- accessible from anywhere

// var num = 100;
// let num2 = 20;
// const num3 = 60;

// function myFunc() {
//   console.log(num);
// }

// // myFunc();
// let a = "hello";
// function greet() {
//   console.log(a);
// }
// greet();

// 2>Function scope - inaccessible from outside function

// let wishes = "Hello good morning sir";

// function greet() {
//   var a = 30;
//   let wishes = "Hello good morning";
//   //   console.log(a);
//   console.log(wishes);
// }

// function myFunc() {
//   let wishes = "Good night";
//   console.log(wishes);
// }

// myFunc();
// greet();
// console.log(wishes);

// 3> Block Scope; inaccessible from outside block {}

// if (100 > 20) {
//   // this is the block
//   let a = 20;
//   const s = 200;
//   var k = 90;
// }

// console.log(a);
// console.log();
// console.log(k);

//Functions

// function greetMorning () {}

// function greetMorning() {
//   console.log("Good mornong");
//   let a = 100;
//   let b = 200;
//   console.log(a + b);
// }
// greetMorning();

// function sayMyName() {
//   console.log("doctor");
// }
// sayMyName();

// function sayName(name) {
//   console.log(name);
// }

// sayName("harry");

// function greeting(name) {
//   let greet = "hi " + name + " nice to meet you!";
//   console.log(greet);
// }
// greeting("shubham");

// Template literals= ``

// function greeting(name, age) {
//   let greet = `hi I am ${name} my age is ${age}`;
//   console.log(greet);
// }
// greeting("shubham", 25);

// function sum(a, b) {
//   return a + b;
//   console.log("hello world");
// }
// let a = sum(40, 80);
// console.log(a);
