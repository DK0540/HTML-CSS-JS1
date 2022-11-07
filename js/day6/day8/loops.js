//loops
//for loop===============>done
//while loop===========>done
//do-while loop
//for-in loop
//for-of loop
// for Each loop
//callback
//promise
//map
//ES6
//set
//async/await
//Hoisting

//for loop

// for(initializer, condition, iterator){
//    // body
// }

//initializer: Executes once upon entering the loop;
//condition: checked before every loop iteration. If false loop stops;
//iterator: Executes after the body on each iteration;

// console.log("hello all");
// console.log("hello all");
// console.log("hello all");

// i = 1;
// 1<=3 true;
// i+1 = 2;
// 2+1 = 3;
// 3+1 = 4;

// for (let i=1; i<=3; i++) {
//   console.log("Hello all");
// }

//==========================>>
let fruits = ["Apple", "Banana", "Mango", "Orange"];
// let count = fruits.length;

let html = "";

for (let i = 0; i < fruits.length; i++) {
  html += "<p>" + fruits[i] + "</p>";
}
console.log(html);

document.getElementById("demo").innerHTML = html;

//while loop
while (condition) {
  //code blocks
}
let i = 1,
  n = 5;

while (i <= n) {
  console.log(i);
  i += 1;
}
