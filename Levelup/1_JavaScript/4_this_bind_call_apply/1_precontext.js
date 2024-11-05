
/**
 * 1. 
 * function has two parts
 * 1. function defeinition -> code
 * 2. function invoaction -> call (code Eexcute)
 * JS : functions are also variables
 *  a.) you pass the refreence to other variable 
 *  b.) acess the ref as will-> print
 * 
 * **/
// function definition
function fn2() {
    console.log("I am fn2");

    return "rval from fn2";
}

// function invocation
const varName = fn2();
console.log("rVal", varName);
// accessing the refreence the function
// console.log("11", fn2);

// let a=[1,2,3,4];
// let b=a;
// const fn3=fn2;
// fn3();

/**
// variable get there memory on run time , 
value of the variable depend upon it's EC 
 * **/
// let a = 10;
// console.log("34", a);
// function fn() {
//     let a = 100;
//     console.log("37", a);
// }
// fn();
// console.log("40", a);

/***
 *  function 
 * method : a function that is  value of an object
 * properties : values in an object 
 * */

// normal function
function fn() {
    console.log("I am a fn ");
}
const refFn = function () {
    console.log("I am also a fn");
}
// function call
fn();
refFn();



let cap = {
    // property
    name: "Jasbir",
    last: "Singh",
    // method
    sayHi: function () {
        console.log("Hi from Jasbir");
    }
}
// method 
cap.sayHi();
