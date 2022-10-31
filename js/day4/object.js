// Object
// person = name
//          place,
//          city,
//          id,

//          mobile = ram,
//                   battery, camera, display, res,

//                   register form : name;
//                                   email, password, checkbox,

let Person = {
  fullName: "John",
  age: 25,
  hobbies: ["coding", "Boxing", "playing Chess"],
  good: true,
  showAge: function () {
    alert(this.age);
  },
};
// Object literal
let person = {};
console.log(person);

person["name"] = "harish";
(person["age"] = 20), console.log(person);

let Person2 = {
  name: "Googly",
  city: "Goa",
  PhoneNUmber: 635356256252,
};

//Object Constructor
//Factory Function
// Constructor function(this)
//DOM
