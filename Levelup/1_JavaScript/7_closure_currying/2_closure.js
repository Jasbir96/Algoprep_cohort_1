/**
 * Closure : inner fn forms closure over outer fn's variable and it's variables are persent
 * even if outer fn is removed from the stack .
 *  When closure is fromed -> when a inner fn is hoisted it form closure over outer variable
 * closure is formed on variable not the value
 * */


// function outerFunction() {
//     let count = 0;
//     function innerFunction() {
//         count++;
//         return count
//     }
//     return innerFunction
// }
// const innerFunc = outerFunction();
// console.log(innerFunc());
// console.log(innerFunc());


// Question-2 closures
// function createCounter(init, delta) {
//     function count() {
//         init = init + delta;
//         return init;
//     }
//     return count;
// }


// let c1 = createCounter(10, 5);  
// let c2 = createCounter(5, 2); 

// console.log(c1())   
// console.log(c2())
// console.log(c1())  
// console.log(c2())


/***
 * Nested closure : you will get access to outer variable even if the
 * outer fn is not your direct parent
 * */

// let iamINGEC = 200;
// function getFirstName(firstName) {
//     console.log("I have got your first Name");
//     return function getLastName(lastName) {
//         console.log("I have got Your last Name");
//         return function greeter() {
//             console.log(`Hi I am ${firstName} ${lastName}`);   //closure
//             console.log("Hi GEC", iamINGEC) // lexical scope
//         }
//     }
// }

// const fnNameRtrn = getFirstName("Jasbir");
// console.log(fnNameRtrn);

// const lnNameRtrn = fnNameRtrn("Singh");
// console.log(lnNameRtrn);

// lnNameRtrn();


