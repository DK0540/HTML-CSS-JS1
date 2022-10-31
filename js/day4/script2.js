// indexOf
let newArr = ["harish", 23, "goa", true];

let newArr1 = newArr.indexOf(23);
console.log(newArr1);

//includes
let s = newArr.includes(78);
console.log(s);

//Splice Method
let Array = ["hari", "jack", "Peeter", "Sanjay"];
// Array[1] = "kd";

// Array.splice(start_position, 0 , new_element...)

Array.splice(3, 0, "shubham");
Array.splice(4, 0, "pooja", "khushbu", "anand", "cars");
console.log(Array);

//Concat
const cities = ["goa", "mubai", "hariyan", "panjab"];

let newCities = cities.concat("bglr", "chennai", "andra");

console.log(newCities);

//Slice method

const myFav = ["goa", "mubai", "hariyan", "panjab", "bglr", "chennai", "andra"];
//  0       1        2           3        4         5         6
// Array.slice(start, end)

let myFavCity = myFav.slice(-6, -1);
console.log(myFavCity);
