/****
 * 1. Every line of code that you wrote in your js file -> will only execute in call stack  
 * 2. For a cb coming from WebAPIS to execute -> callstack should be empty
 * 3. callback queue :As soon as task of asynchronous function is done there cb is immediatley
 * enqueued in that queue
 * 4. event loop : checks the queue and as soon as a cb arrived in the queue it continously 
 * check if callstack is empty or not and pushed that cb in callStack .
 * **/

// let a = true;
// console.log("Before");
// function fn() {
//     a = false;
//     console.log("I broke the while loop");
// }
setTimeout(fn, 2000);
// console.log("After");

// let CurrentPlus6sec = Date.now() + 6000;

// while (Date.now() < CurrentPlus6sec) {

// }





/****
 * Browser
 * * console.log-> browser
 * * setTimout -> browser
 * * document -> browser
 * * window -> browser
 * What is JS doing then 
 * Rule of thumb 
 *  JS : logic
 *  Enviornment : features
 * **/

/****
 * Mobile Application -> React Native -> JS
 * Frontend -> Browser -> JS
 * Backend -> Nodejs -> JS
 * Desktop App-> Electron -> JS
 * **/

/***
 * c/c++ -> Java(there are no pointer)
 * Java -> JS (no multithreading)
 * ***/

console.log("Before");
function a() {
    console.log("I am a");
}

function b() {
    console.log("I am b");
}
setTimeout(a, 1000);
console.log("After st 0sec call")
setTimeout(a, 0);
console.log("After st 1 sec call")
setTimeout(b, 2000);
console.log("After st 2 sec call")
console.log("After");