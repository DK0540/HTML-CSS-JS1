//Object literals

// const userProfile = {
//   firstName: "Marry",
//   lastName: "Naik",
//   dateOfBirth: 1996,
//   last_city: "pune",
//   showFullName: function () {
//     console.log(userProfile.firstName + " " + this.lastName);
//   },
// };

// console.log(userProfile.firstName);
// console.log(userProfile.lastName);
// console.log(userProfile["dateOfBirth"]);
// console.log(userProfile["last_city"]);
// userProfile.showFullName();

//   (.) Notation to access the value
// //this

// var city = "mubai";
// function myFunc() {
//   var x = this;
//   x.alert("I want to go to " + x.city);
// }

// myFunc();

// let x = this;
// x.alert("Hello world");

//Constructor Function

// const userProfile2 = {
//     firstName: "Ban",
//     lastName: "master",
//     dateOfBirth: 1997,
//     last_city: "Mubai",
//     getName: function
// }

// function User(firstName, lastName, dateOfBirth, city) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dateOfBirth = dateOfBirth;
//   this.city = city;
//   this.getName = function () {
//     return "Users name: " + this.firstName + " " + this.lastName;
//   };
// }

// const userProfile2 = new User("Ban", "master", 1995, "Goa");
// const userProfile3 = new User("Harish", "lastName", 1992, "Pune");
// console.log(userProfile2.getName());
// console.log(userProfile3);

//ES6 Classes
// class User {
//   constructor(firstName, lastName, dateOfBirth) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dateOfBirth = dateOfBirth;

//     this.getName = function () {
//       return "Users name: " + this.firstName + " " + this.lastName;
//     };
//   }
// }
// const userProfile4 = new User("Harry", "Nice", 1994);
// console.log(userProfile4.getName());

//Object.create Method
// Object.create() method

// const userProfile5 = {
//   firstName: "Anand",
//   lastName: "master",
//   dateOfBirth: 1996,
//   last_city: "Dehli",
//   showFullName: function () {
//     console.log(userProfile.firstName + " " + this.lastName);
//   },
// };

// const userProfile6 = Object.create(userProfile5);

// userProfile6.firstName = "shubham";
// userProfile6.lastName = "blaster";
// userProfile6.dateOfBirth = 1998;

// console.log(userProfile6.dateOfBirth);

// Factory function--->

// function createPerson(firstName, lastName) {
//   return {
//     firstName: firstName,
//     lastName: lastName,
//     getFullName() {
//       return firstName + " " + lastName;
//     },
//   };
// }

// let person1 = createPerson("john", "Jack");
// let person2 = createPerson("peeter", "Jack");
// console.log(person1.getFullName());
// console.log(person2.getFullName());

//===========================>>>>>>>>

function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
  };
}

let personActions = {
  getFullName() {
    return this.firstName + " " + this.lastName;
  },
};

let person3 = createPerson("harry", "Deo");
person3.getFullName = personActions.getFullName;
console.log(person3.getFullName());

let person4 = createPerson("kandy", "singh");
person4.getFullName = personActions.getFullName;
console.log(person4.getFullName());
