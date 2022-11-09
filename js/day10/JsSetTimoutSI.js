// let nameOfa = "Harry";
// console.log(nameOfa);
// console.log("Good Aft noon");
// console.log("Good evening");

//setTimeout()-->

// setTimeout(function, milliseconds);

// let timeOut = setTimeout(function(){
// //code body
// },delay)

// function--->A function containing a block of code. it executed when the timer expires.
// milliseconds-->the time after which function is executed.

// function greet() {
//   console.log("hello world");
// }

// setTimeout(function () {
//   console.log("Hello world");
// }, 7000);

// console.log("This massage shown first");

// let myTimeout = setTimeout(function () {
//   alert("Hello world");
// }, 3000);

//clearTimeout(); ---> If you want to stop this function call, you can use the clearTimeout()method.

// let count = 2;
// function increaseCount() {
//     count += 1;
//   console.log("Iam setTimeout");
// }
// let id = setTimeout(increaseCount, 7000);

// clearTimeout(id);
// console.log("setTimeout stopped");
// console.log("1223");

// function showAlert() {
//   setTimeout(function () {
//     console.log("this is alert");
//   }, 5000);
// }
// showAlert();

//You can pass additional arguments to the setTimeout()method.
// setTimeout(function, milliseconds, parameter1, ...parameterN)

// function greet(name, lastName) {
//   console.log("hello" + " " + name + " " + lastName);
// }

// setTimeout(greet, 5000, "Candy", "kumar");

//setInterval();
// The setInterval method repeatedly call the function.

// setInterval(function(),delay);

// function--> will be executed every delay milliseconds;
// delay--> the time in milliseconds this timer should delay in between execution of the function;

// let x = 10;
// let myInterval = setInterval(function () {
//   x += 10;
//   console.log(x);
// }, 2000);

// //clearInterval()-->method stops a times function specified by the setInterval() method.

// function stopInterval() {
//   clearInterval(myInterval);
// }
// stopInterval();
