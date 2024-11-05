// var a = 10;
// console.log("line number 2", a);
// function fn() {
//     var a = 20;
//     console.log("line number 5", a);
//     a++;
//     console.log("line number 7", a);
//     if (a) {
//         var a = 30;
//         a++;
//         console.log("line number 11", a);
//     }
//     console.log("line number 13", a);
// }
// fn();
// console.log("line number 16", a);



// var variables-> 
    // 1. redeclare -> allowed
    // 2. scope -> function level

// var a=10;
// var a=20;
// console.log("a",a);

// let a=10;
// let a=20;



// let 
// redeclare in same scope -> is not allowed
// scope -> block scope
//  block is space between two curly braces {}



// fn -> x
        // outer a -> 21(function block)x
        // inner a -> 31(if block)  x
// GEC -> fn, a=10;

// let a;
// console.log("line number 2", a);
// a = 10;
// console.log("line number 2", a);
// function fn() {
//     let a = 20;
//     console.log("line number 5", a);
//     a++;
//     console.log("line number 7", a);
//     if (a) {
//         let a = 30;
//         a++;
//         console.log("line number 11", a);
//     }
//     console.log("line number 13", a);
// }
// fn();
// console.log("line number 16", a);

//  console 
// 2,10
// 5,20
// 7,21
// 11, 31
// 13 , 21
// 16, 10



// console.log("63",a);
// var a = 10;
// console.log("65",a);


// console.log("val in a", a);
/***
 * Temporal Dead Zone : before declaration let varaibales are not accessible 
 * */
// let a;

// console.log("val in a", a);
// a = 10;
// console.log("val in a", a);

/**
 * var
 * -> scope : var is fn scope
 *  -> redeclared is allowed in current scope
 * -> in the case var you can access it before declaration
 * **/

/***
 * let
 * -> it is a block scope
 *  -> re-declaration is not allowed in current scope
 * -> hositing happens but with temproral dead zone: cannot acces the value before declaration
 * **/


/*****
 * Type 1 : fn hositing -> function get the memory
 * Type 2 : variable -> like var -> they undefined , can also be accessed before declaration
 * Types 3:  Variable -> like let and const -> they are undefined , can't access it before declaration
 * */

/**
 * data copy 
 * * assignment -> primititive (value), non-primitive(reference)
 * * shallow copy -> non-primitive -> copy
 * * deep copy -> 
 * */ 

// const a=10;
// a=20;
// const arr=[10,20,30,40,50];
// arr.pop();
// console.log("arr",arr);


// const obj={a:10}
// obj.a=100;
// console.log(obj);
 
