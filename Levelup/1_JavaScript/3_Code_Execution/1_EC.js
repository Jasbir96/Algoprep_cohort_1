/**** high level overview of JS code execution
 *
 */
/*
code Execution 
 * 1. all the code is written by you is executed on a callstack and inside a execution context
Exceution Context
*  It is created when
*  b. code execution started for global code->
*       global execution context
*  a. function is called 
**/
// var a = 10;
// function fn() {
//     console.log("I am fn");

//     function inner() {
//         console.log("I am inner");
//     }

//     inner();
// }

// fn();

/***
 * How does Code is executed in a given execution context
*  ->Execution context is executed in two phases
*      a.) Execution context creation -> everything that is required by EC is provided
             1. memory Allocation: hositing
                    a.) variables :  undefined
                    b.) functions : heap memory 

*      b.) code execution -> left to right , top to bottom
 * **/

console.log("37",a);
var a = 10;
console.log("39",a);
fn();
function fn() {
    console.log("I am fn");

    function inner() {
        console.log("I am inner");
    }

    inner();
}

