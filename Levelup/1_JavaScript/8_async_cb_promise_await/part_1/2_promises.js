// asychronous callback based methos
// fs.readFile("f1.txt", cb);
// function cb(err, dats) {

// }

// 1. promise is an object that represents the eventual completion (or failure) of 
// an asynchronous operation and its resulting value.

/**
 * Promise based fn -> don't take any cb but return promise object
 * 
 * Promise : is an object that contains two properties
 * Intially
 *  a. state : pending
 *  b. value : undefined 
 * 1. success
 *  a.  state : resolved
 *  b. value : result value
 * 2. failure
 *  a. state : reject
 *  b. value : err
 *
*/
// 
const fs = require("fs");

const promise = fs.promises.readFile("f1.txt");

console.log("before");
console.log("promise", promise);
console.log("After");

setTimeout(function () {
    console.log("task is done", promise);
},1000);
