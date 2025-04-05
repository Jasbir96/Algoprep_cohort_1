// consume -> libarry
const lib = require("./lib");

console.log("Before");

let amount = 100;
let priceofOne = 20;

function cb() {
    amount = amount - priceofOne;
    console.log("amount", amount);
}

// promise -> can either resolved or rejected once in it's lifetime
// lib.runMlalgo(priceofOne,cb);
const promise = lib.pRunMLAlgo(amount);

promise.then(cb);
promise.catch((err)=>{console.log("er",err)});


console.log("after");