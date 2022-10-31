//Arrow function
// function myFunc() {
//   alert("hello");
// }
// myFunc();

// const myFunc2 = () => {
//   alert("Hello world");
// };
// myFunc2();

// const myFunc3 = () => {};

// const myFunc4 = (x, y) => alert(x + y);
// myFunc4(3, 4);

//Array methods
//Push method add element at end of the array.

let names = ["rajesh", "harry", "puneeth", "rock", "D"];
names.push("Rio");
console.log(names);
names.push("Tyagi");
console.log(names.length);

//unshift method add element at the first

names.unshift("Googly");
console.log(names);

//pop method remove last element
names.pop();
console.log(names);

//shift method remove first element
names.shift();
console.log(names);
console.log(names[names.length - 5]);

//ForEach
let cities = ["Mubai", "goa", "noida", "Pune", "Bangalore"];
cities.forEach(function (val, i, arr) {
  console.log(i + ": " + val);
});

console.log(cities[0]);
console.log(cities[1]);
console.log(cities[3]);

//join() method
let str = cities.join();
let str1 = cities.join(" ");
console.log(str);
console.log(str1);

//split() method
let string = "Hello world good morning";
let arr = string.split(" ");
console.log(arr);

//concat()
let wishes = ["Hello", "world", "good", "morning"];
let fruits = ["grape", "mango", " Apple", "Banana"];
let kg = [34, 12, 23, 15];

let totalFunc = wishes.concat(fruits, kg);
console.log(totalFunc);

let jk = ["Hello", "world", "good", "morning"];

console.log(jk);

let person = {
  name: "john Doe",
  age: 30,
  hobbies: ["coding", "playing", "dance"],
};
console.log(person["name"] + person["hobbies"]);
