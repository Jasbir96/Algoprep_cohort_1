let cap = {
    name: "Steve",
    sayHi: function (avenger1, aveneger2) {
        console.log(this.name + " say's HI", aveneger2, avenger1);
    },
    sayHiMultiple: function (...args) {
        console.log(this.name + "say's Hi", ...args);
    }

}
const ironMan = {
    name: "tony"
}

/**********************Originals************************/

//call -> you directly call a fuction with a this 
// cap.sayHi.call(ironMan, "peter", "natsaha");
// ironMan.sayHI("peter","natasha")

// apply -> directly call with array of params -> n number of params
// cap.sayHiMultiple.apply(ironMan, ["peter", "natsaha","bruce"]);



//  you want to borrow the function
// const boundFN=cap.sayHi.bind(ironMan);
// boundFN("peter","natasha")

/**************************************/


// /*******************polyfill for mycall******************************/
// Function.prototype.myCall = function (newThis, ...params) {
//     const myrequiredFn = this;
//     //  1. required object -> function attach
//     newThis.toBeCalledFN = myrequiredFn
//     // 2. call 
//     newThis.toBeCalledFN(...params);
//     // 3. required object -> delete
//     delete newThis.toBeCalledFN;
// }

// 
// cap.sayHi.myCall(ironMan, "peter", "natsaha");
// ironMan.sayHi("peter","natasha");


// Function.prototype.myApply = function (newThis, params) {
//     const myrequiredFn = this;
//     //  1. required object -> function attach
//     newThis.toBeCalledFN = myrequiredFn
//     // 2. call 
//     newThis.toBeCalledFN(...params);
//     // 3. required object -> delete
//     delete newThis.toBeCalledFN;
// }

// cap.sayHiMultiple.myApply(ironMan, ["peter", "natsaha", "bruce"])



Function.prototype.myBind = function (newthis) {
    const futureMethod = this;
    return function (...params) {
        newthis.boundMethod = futureMethod;
        newthis.boundMethod(...params);
        delete newthis.boundMethod();
    }
}


// const boundFN=cap.sayHi.myBind(ironMan);
// boundFN("peter","natasha");

// const boundFN=cap.sayHi.bind(ironMan);
// boundFN("peter","natasha")











