

/***
 * EC : 
 * a.creation 
 *  1.    global code
 *              -> access to it's own variable and function 
 *                  -> Hositing 
 *                          var -> undefined 
 *                          function -> memory 
 *      function code 
 *                  -> access to it's own variable and function 
 *                  -> Hositing 
 *                          var -> undefined 
 *                          function -> memory 
 *              -> window object
 *              
 * 
 *  2. If there is no variable  present  that i want to access in the current function scope then outer scope 
 * b.) execute
 * 
 * */
// let a = 10;
// console.log("value of a in global", a);
// function outer() {
//     console.log("value of a in outer", a);

//     function inner() {
//         let a = 20;
//         console.log("value of a in inner", a);
//     }

//     inner();
// }
// outer();
// console.log("value of a in global", a);


/**
 * outer variable and functions -> outer scope
 * this outer scope is defined by function defintion
 * -> js the outer is lexically scoped
 * 
 * **/ 


let varName = 10;
// function definition
function a() {
    console.log("inside ", varName);
}

function b() {
    let varName = 20;
    console.log("value of varName in b", varName);
    //    function call
    a();
    console.log("value of varName in b again", varName);
}
b();