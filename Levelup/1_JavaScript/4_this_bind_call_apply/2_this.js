
// let cap = {
//     // property
//     name: "Jasbir",
//     last: "Singh",
//     // method
//     sayHi: function () {

//         console.log(this.name);
//         console.log(this.last);
//         console.log("Hi from Jasbir");
//     }
// }
// // JS: 
// // EC create ->
// // variables-> memory allocation , outer scope , window, 
// // this calculate 
// cap.sayHi();


// function fn() {
// console.log("this",this);
// function inner(){
//     console.log("this",this);
// }
// inner();
// }
// //  function call -> EC : this : window object
// fn();

/**
 * this is defined for an excution context
 * this -> function call -> window object
 * this -> method call -> that calling object
 * GEC : this -> window object
 * **/

/****question-1******/
var firstName = "loki"
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

/******question-2
 * 
 *  */
// let cap = {
//     firstName: "Steve",
//     sayHi: function () {
//         console.log("61", this.firstName);
//         const iAmInner = function () {
//             console.log("63", this.firstName);
//         }
//         iAmInner();
//     }
// }
// cap.sayHi();
// for node this in GEC : empty object
// console.log(this);


/****
 * question 3
 * Arrow function : does not have it's own this it always
 * takes this from outer scope
 * syntax sugar
 * **/

// const refFn =()=> {
//     console.log("I am also a fn");
// }
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
