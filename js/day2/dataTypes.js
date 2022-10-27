// Data Types;

var num = 200;
let string = "String";
const a = true;

//Primitive data type and Non-Primitive data types.

// Primitive data types--> Pre defined data type.

// Number
let x = 100;
let y = 10.5;

console.log(x + y);

// String;
let greet = "Good morning";
let funName = "Shubham";
let lastName = "k";
let city = "Goa";
console.log(
  "my Name is " + funName + " " + lastName + " " + "welcome to " + city
);

// undefined --> value is not defined

// console.log("Value of j" + j);

let g;
console.log(g);

console.log(typeof g);
console.log(typeof greet);
console.log(typeof x);

// Boolean --> Only two values True and False;
let bool = false;
console.log("Value of bool " + bool);
let isCodingFun = true;
let isMathFun = false;

console.log("Is coding fun?" + isCodingFun + " " + "is Math fun?" + isMathFun);

//NULL ==> This dat type can hold only one possible value that is null.

let n = null;
console.log(n);

//Non-Primitive data types.
// The data types that are derived from primitive data types of the Java script.

// Object;
// Arrays;

let obj = new Object();
console.log(obj);

let inform = {
  name: "D",
  city: "Bangalore",
  age: 28,
  havingHome: false,
};

// keys = name, city, age, havingHome;
// values = "D", "Bangalore", 28, false;

console.log(inform);

// let a = 23,
// let b = "name";

let newArr = ["apple", "oranges", "bananas"];

console.log(newArr);

let s = new Array();
let b = new Array(10);
console.log(b);

let address = ["pooja", "Noida", 189123];

console.log(address[2]);

let dates = [4, 5, 1, "true", false, 87, "Noida"];
console.log(dates.length);

let food = prompt("how?");
tipP = prompt("tip %?") / 100;
tipAmount = food * tipP;
console.log(tipAmount);
