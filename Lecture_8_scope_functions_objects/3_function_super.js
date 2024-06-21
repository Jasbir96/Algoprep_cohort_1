

/**
 * 0. function has two parts
 *      fn defintion
 *      fn invocation
 *
 * */

// fn defenition
// function fn() {
//     console.log("Hello");
// }

// // // fn invocation -> code inside that fn is execute 
// fn();


// variables -> assign ->reference , value
// let arr = [10, 20, 30];
// let arr2 = arr;
// let a = 10;
// let b = a;


// variables -> can be passed as a parameter to a function

// function fn(params) {
//     console.log("Hello Params", params);
// }
// fn(10);
// fn("Hello");
// fn(arr2);


/*****
 * You can treat a function as a variable
 * 
 * ***/

function fn() {
    console.log("Hello");
}

// // fn invocation -> code inside that fn is execute 
fn();
// access
// console.log(fn);



// let arr = [10, 20, 30];
// let arr2 = arr;
// console.log("arr",arr)
// console.log("arr2",arr2)


// function expression
// const refFunction = function () {
//     console.log("Hello i am fuunction");
// }

const newFNVar=refFunction;

// newFNVar();
// // console.log("`````````````````");
// refFunction();



// let real=function () {
//     console.log("I am real. Always run me");
// }

// let real=function () {
//     console.log("No I am real one ");
// }

// let real=function () {
//     console.log("You both are wasted");
// }

// real();






// let arr = [10, 20, 30];
// let arr2 = arr


// function fn(params) {
//     console.log("Hello Params", params);
// }
// fn(10);
// fn("Hello");
// fn(arr2);


function bigger(paramFN) {
    console.log("Inside bigger")
    paramFN();
}

function smaller() {
    console.log("I am smaller");
}
bigger(smaller)
