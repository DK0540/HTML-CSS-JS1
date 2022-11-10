//Callback
//Promise
//Async-await

//Promise
// let promise = new Promise(function (pending, resolve, rejected) {
//   //do somthing;
// });

// const count = false;
// let countValue = new Promise(function (resolve, reject) {
//   if (count) {
//     resolve("There is a count value");
//   } else {
//     reject("There is no count value");
//   }
// });

// console.log(countValue);

const datas = [
  {
    name: "Harry",
    city: "Goa",
  },
  {
    name: "Aadi",
    city: "Mubai",
  },
];

function getData() {
  setTimeout(() => {
    let output = "";
    datas.forEach((data, index) => {
      output += `<li> ${data.name}</li>`;
      document.body.innerHTML = output;
    });
  }, 1000);
}

//callback
// function createData(newdata, callback) {
//   setTimeout(() => {
//     datas.push(newdata);
//     callback();
//   }, 2000);
// }

// // getData();

// createData({ name: "Peetor", city: "Pune" }, getData);

//promise
// function createData(newdata) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       datas.push(newdata);
//       let error = false;
//       if (!error) {
//         resolve();
//       } else {
//         reject("Somthing went wrong");
//       }
//     }, 2000);
//   });
// }

// // getData();
// createData({ name: "Peetor", city: "Pune" })
//   .then(getData)
//   .catch((err) => console.log(err));

//promise
function createData(newdata) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      datas.push(newdata);
      let error = false;
      if (!error) {
        resolve();
      } else {
        reject("Somthing went wrong");
      }
    }, 2000);
  });
}

// getData();
//   createData({ name: "Peetor", city: "Pune" })
//     .then(getData)
//     .catch((err) => console.log(err));

async function main() {
  await createData({ name: "Peetor", city: "Pune" });
  getData();
}
main();

//async-await
// async function name(parameter1, parameter2, parameter3) {
//   //statement
// }

// async function myFunc() {
//   console.log("Async function");
//   return Promise.resolve(1);
// }
// myFunc().then(function (result) {
//   console.log(result);
// });

// let result = await Promise;

// let promise = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("Promise resolved");
//   }, 1000);
// });

// async function asyncFunc() {
//   let data = await promise;

//   setTimeout(() => {
//     console.log(data);
//   }, 3000);
//   console.log("hello");
// }

// asyncFunc();
