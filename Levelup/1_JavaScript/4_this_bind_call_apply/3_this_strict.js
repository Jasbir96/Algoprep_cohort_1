"use strict";
// var a = 10;
// // varName=100;
// // console.log("varName",varName);
// function fn() {
//     // function scope -> this will be undefined
//     console.log(this);
// }
// fn();

// // GEC : this 
// console.log(this);


// function fn() {
// console.log("this",this);
// function inner(){
//     console.log("this",this);
// }
// inner();
// }
// //  function call -> EC : this : window object
// fn();

// let cap = {
//     firstName: "Steve",
//     sayHi: function () {
//         console.log("41 this is ", this);
//         console.log("Hi from ", this.firstName);
//     }
// }
// //method
// cap.sayHi();
// // address transfer
// let sayHiAdd = cap.sayHi;
// // function call 
// sayHiAdd();

// let cap = {
//     firstName: "Steve",
//     sayHi: function () {
//         console.log("61", this.firstName);
//         const iAmInner = () => {
//             console.log("63", this.firstName);
//             const superInner = () => {
//                 console.log("92", this.firstName);
//             }
//             superInner();
//         }
//         iAmInner();
//     }
// }

// cap.sayHi();

console.log(this)