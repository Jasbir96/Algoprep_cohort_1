/******
 * Promise.resolve(); -> resolved promise 
 * Promise.reject(); -> rejected promise
 * Promise.all();
 * Promise.allSettled();
 * Promise.race();
 * Promise.any();
 * 
 * 
 * ***/


//  gives you a resolved promise
// promise object -> 
// state : resolved
// result :3
const p0 = Promise.resolve(3);
console.log("p0", p0);
// gives you rejected promise
// const p1 = Promise.reject("i was reject");
// console.log("err promise", p1);



/***********************Promise.all**************************************/
//  returns you a promise 
//  that will resolve when all the promises inside this array get resolved 
// will rejected if either of these get's rejected
const fs = require("fs");
//  Promise.all=>you want all these async promise based functions to exceute parllely
//  and  get there collected result at the end 
const f1Promise = fs.promises.readFile("f11.txt"); // 3sec
const f2Promise = fs.promises.readFile("f22.txt"); // 5sec
const f3Promise = fs.promises.readFile("f3.txt"); // 5sec



// const combinedPromise = Promise.all([f1Promise, f2Promise, f3Promise]);

// combinedPromise.then((resArr) => {
//     resArr.forEach((data) => { console.log("data" + data) })
// })
// combinedPromise.catch((err) => {
//     console.log(err)
// })

/***************************Promise.allSettled******************************/
//  returns you a promise 
//  that will always give you back  the end outcomes of all the promises that were inside listed array

// const allSettledPromise = Promise.allSettled([f1Promise, f2Promise, f3Promise]);
// allSettledPromise.then((resArr) => {
//     resArr.forEach((data) => { console.log("data", data) })
// })
// allSettledPromise.catch((resArr) => {
//     resArr.forEach((data) => { console.log("data" + data) })

// })

/**********************************Promise.race**************************************/
/****
 * it returns a promise that will resolved/rejected to the value of the first resolved/rejected  promise
 * 
 * ***/
// const allSettledPromise = Promise.race([f1Promise, f2Promise, f3Promise]);
// allSettledPromise.then((res) => {
//     console.log("res"+ res);
// })
// allSettledPromise.catch((resArr) => {
//     resArr.forEach((data) => { console.log("data" + data) })
// })


/*******
 * Promise.any: it returns a promise 
 *  1. resolved:  to first promise that get resolved 
 *  2. rejected : when all the promises get rejected  
 * 
 * ****/ 

const allSettledPromise = Promise.any([f1Promise, f2Promise, f3Promise]);
allSettledPromise.then((res) => {
    console.log("res"+ res);
})
allSettledPromise.catch((resArr) => {
    resArr.forEach((data) => { console.log("data" + data) })
})


