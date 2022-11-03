//there are three forms of the if else statement

//if statement
//if..else statement
//if..else if statement

// if(condithin1){

// }else if(condithin2){

// }else{
//    final code
// }

let number = 0;

// if (number > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }
let age = 23;
if (age > 18) {
  console.log("welcome");
} else if (age == 18) {
  console.log("not allowed");
} else if (age < 18) {
  console.log("go and read");
} else {
  console.log("please enter age");
}

//switch

// switch (variable / expression) {
//   case value1:
//     // body of case1
//     break;

//   case value2:
//     // body of case2
//     break;
//   case valueN:
//     // body of caseN
//     break;

//   default:
//   // body of default;
// }

let fruit = "mango";

switch (fruit) {
  case "apple":
    alert("The color is red and price 100/- per kg");
    break;
  case "strawberry":
    alert("The color is pink and price 50/- per kg");
    break;
  case "mango":
    alert("The color is yellow and price 200/- per kg");
    break;
  default:
    alert("that is not fruit");
}

//find the given number is odd or even?
