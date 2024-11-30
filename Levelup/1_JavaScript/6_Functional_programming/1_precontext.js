/*********
 * fns are first class citizen in js -> fn acts as a object in js
 * objects
 * 
 * Objects Observation : 
 *  * assign address of on object to another var
 *  * pass an object as a parameter to a function
 *  * return an object from a function
 * 
 * */


/****first behaviour
 * assign address of an object to another var -> 
 * assign address of a fn to another var
 * 
 * */

// let obj = { name: "Jasbir" };
// // ...
// let obj2 =obj;
// console.log("obj2",obj2);


// function fn() {
//     console.log("Hello i am fn");
// }
// // ...
// let anotherName = fn;
// anotherName();


/****function expression*/
// let fn = function() {
//     console.log("Hi i am fn");
// }
// fn();

// arrow function
// let fn = ()=> {
//     console.log("Hi i am fn");
// }
// fn();


// real();

// function real() {
//     console.log("I am real. Always run me");
// }

// function real() {
//     console.log("No I am real one ");
// }

// function real() {
//     console.log("You both are wasted");
// }

// real();

let real = function () {
    console.log("I am real. Always run me");
}
// let real=function () {
//     console.log("No I am real one ");
// }

// let real=function real() {
//     console.log("You both are wasted");
// }
// real();


/********************* 2nd behaviour ***************************/
// pass an object as a parameter
// let obj = { name: "Jasbir" };


// function smaller() {
//     console.log("I am smaller");
// }
// function bigger(param1) {
//     console.log("83",param1);
//     param1()

// }

// // bigger(obj);
// bigger(smaller);


// function squarer(src) {
//     let newArr = [];
//     for (let i = 0; i < src.length; i++) {
//         let sqElem = src[i] * src[i];
//         newArr.push(sqElem);
//     }
//     return newArr;
// }


// function cuber(src) {
//     let newArr = [];
//     for (let i = 0; i < src.length; i++) {
//         let cueElem = src[i] * src[i] * src[i];
//         newArr.push(cueElem);
//     }
//     return newArr;
// }
// function getFirstName(source) {
//     let newArr = [];
//     for (let i = 0; i < source.length; i++) {
//         newArr.push(source[i].name);
//     }
//     return newArr;
// }

// let arr = [10, 20, 30, 40];

// let metaArr = [{ name: "Jasbir", lastName: "Singh" }, 
//     { name: "Steve", lastname: "Rogers" }]

// let sqauredArr = squarer(arr);
// console.log("sqauredArr", sqauredArr);

// let cubeArr = cuber(arr);
// console.log("cubeArr", cubeArr);

// let firstNameArr=getFirstName(metaArr);
// console.log("firstNameArr",firstNameArr);

/**
 * higher order function : is a fn that recives a fn as a parameter or return a function
// cb : a function that is passed s parameter to another function (HOF) and 
that will be called later by HOF 
 * 
 * 
 * **/ 
// Arr.map
function transformer(arr, cb) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let sqElem = cb(arr[i]);
        newArr.push(sqElem);
    }
    return newArr;
}


function squarerCb(elem) {
    return elem * elem;
}
function cuberCb(elem) {
    return elem * elem * elem;
}
function getFirstNameCb(elem) {
    return elem.name;
}

let arr = [10, 20, 30, 40];

let metaArr = [{ name: "Jasbir", lastName: "Singh" }, 
    { name: "Steve", lastname: "Rogers" }]

let sqauredArr = transformer(arr, squarerCb);
console.log("sqauredArr", sqauredArr);

let cubeArr = transformer(arr,cuberCb);
console.log("cubeArr", cubeArr);

let firstNameArr=transformer(metaArr,getFirstNameCb);
console.log("firstNameArr",firstNameArr);




