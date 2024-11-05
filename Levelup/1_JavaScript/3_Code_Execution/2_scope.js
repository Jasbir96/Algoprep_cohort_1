/***
 * How does Code is executed in a given execution context
*  ->Execution context is executed in two phases
*      a.) Execution context creation -> everything that is required by EC is provided
             1. memory Allocation: hositing
                    a.) variables :  undefined
                    b.) functions : heap memory
            2. outer scope -> the var 
            and functions that are outside your scope 
            3. this(??)
            4. native objects(??)  -> window

*      b.) code execution -> left to right , top to bottom
 * **/

/*********variable hositing and same scope**********/

console.log("a", a);
var a = 10;
console.log("a", a);
function fn() {
    console.log("64", a);
    console.log("66", a);
    function inner() {
        console.log(a);
        var a;
        a = 30
        console.log(a);
    }
    inner();
}
console.log("68", a);
fn();
console.log("70", a);


// HW : Outer scope
// console.log("19", a);
// var a = 10;
// console.log("21", a);
// function fn() {
//     console.log("23", a);
//     a++;
//     function inner() {
//         console.log("26", a);
//         var a = 40;
//         console.log(a);
//     }
//     inner();
// }
// console.log("30", a);
// fn();
// console.log("70", a);