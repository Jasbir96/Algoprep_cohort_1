
/*****
 * Timer
 * a. SetTimeout : fn , delay
 * b. SetInterval : fn , interval
 * c. clearInterval -> break the interval
 * d. clearTimeout ->  break the timer
 * **/
/************* setTimeout and clearTimeout******/

// console.log("Before");
// function fn() {
//     console.log(" I am being called")
// }

// const timerId = setTimeout(fn, 5000);

// function stopperfn() {
//     console.log("exiting timeout");
//     clearTimeout(timerId);
// }

// setTimeout(stopperfn, 2000);
// console.log("After");

/******************* setInterval , clearInterval***************************/
// console.log("Before");
// function fn() {
//     console.log(" I am being called")
// }
// function stopperfn() {
//     console.log("exiting intervals");
//     clearInterval(timerId);
// }
// const timerId = setInterval(fn, 1000);
// console.log("After");
// setTimeout(stopperfn,5500);
/*****************************************************************/

/********************************Polyfill of setInterval**************
 * setInterval-> cb , interval
 * clearInterval -> timerId;
 * *****************/

function customSetInterval(cb, interval) {
    let obj = {
        flag: true
    }
    function innerFunction() {
        if (obj.flag != true) return;
        cb();
        setTimeout(innerFunction, interval);
    }
    setTimeout(innerFunction, interval);
    return obj;
}

function customClearTimeout(timerobj) {
    timerobj.flag = false;
}


console.log("Before")
function cb() {
    console.log("I am called");
}
const timerRef = customSetInterval(cb, 1000);
console.log("After");


setTimeout(() => {
    customClearTimeout(timerRef)
}, 2500);




