/**
 * EC : 
 *      vars , fns
 *      outer scope -> if a variable is not present in the current EC then JS check the outer scope for it 
 *      this
 *      host object 
 *          * window object(browser)
 *          * global object(nodejs)
 * **/
// var a=10;
// function fn(){
//    var a=20; 
// console.log("value of a ",a);
// }
// fn();
// console.log("outer a",a);

var varName=10;

// function definition
function b() {
    console.log("in b", varName);
}

function fn() {
    var varName = 20;
    //function call
    b();
    console.log(varName);
}

fn();


// JS says that outer scope is lexically scoped -> your fn definiton