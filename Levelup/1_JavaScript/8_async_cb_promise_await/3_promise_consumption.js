const fs = require("fs");
/**
 * Promise based fn -> don't take any cb but return promise object
 * 
*/
// 
console.log("before");

const promise = fs.promises.readFile("./f11.txt");
console.log("promise", promise);
/**
 * then is  an event listener over promise  -> fn when promise is resolved (task is done)
 * **/

promise.then(function (data) {
    console.log("then data" + data)
})

/***
 * catch -> is also an event listener on promises -> fn when promise is rejected(You get an erro)
 * */
promise.catch(function (err) {
    console.log("catch data", err)
})
console.log("After");



