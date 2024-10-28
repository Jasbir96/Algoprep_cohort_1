
// code execution -> high level
// let a=10;
// console.log(a);
// function fn() {
//     console.log("I am fn");
//     function inner() {
//         console.log("I am inner");
//     }
//     console.log("I am fn 2")
//     inner();
//     console.log("I am fn 3")
// }
// fn();
// console.log(a);


/****
 * JS -> 
 * 1. all the code is executed on call stack and inside a execution context
 * 2. An execution context created when
 *  a. a function is called 
 *  b. code execution starte for global code->
 *       global execution context
 * 3. Execution context -> it excutes in two phases
 *      a.) Execution context createion
 *         i.) memory allocation -> hositing
 *              i.) variable -> undefined
 *              ii.) function -> memory allocation in the heap
 *        ii.) window, 
 *        iii .) this, 
 *        iv.)  outer scope
 *
 *      b.) code execution 
 * ***/


// let a;
// console.log(a);
// a = 10;
// console.log(a);


// function fn() {
//     console.log("Hello");

// }

// fn();

// function real() {
//     console.log("I am real. Always run me");
// }

// function real() {
//     console.log("No I am real one ");
// }

// function real() {
//     console.log("You both are wasted");
// }
// real();

// console.log(window.confirm("Hello"));





