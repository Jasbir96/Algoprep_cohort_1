/*****typeof
 * primitives : 
 *  number , string , boolean , undefined ,null
 * bigInt, Symbol
 * Non primtives
 *  : Objects
 * : Arrays 
 * : functions
 * ****/
// let a;
// console.log("varName",a); 
// a=10;
// console.log("varName",a);
// a="hello";
// a=true;

// bigInt
// a=12345678n;
// symbol 
// a= Symbol("mysymbol");
// let b=Symbol("mysymbol");
// a=null;
// console.log(typeof a);


// Non Primitives 
// console.log(typeof {});
// function fn(){
//     console.log("fn")
// }
// console.log(typeof fn);

// console.log("typeof array",typeof [1,2,3,4]);



/***
 * Fact-1: In Js everything is either a primitive or 
 * an object: Arrays , functions , objects
 * **/ 


/****
 * What is a object ->
 *     a.) key , value pair
 *      b.) property and methods
 *
 * ****/


let cap = {
    // properties 
    name: "Steve",
    // methods 
    sayHi: function () {
        console.log("Hi I am Steve")
    }
}

// for(const key in cap){
//     console.log(key  , " and ", cap[key]);
// }


// cap.value=100;
// console.log(cap);
// cap[1]=100;

// console.log(cap[100]);
// let arr=[1,2,3,4,5];

// for(const key in arr){
//     console.log("key", key , arr[key]);
// }

// console.log("arr",arr[6]);
// arr.myprop="hello";
// console.log("arr",arr);

// arr.myfunction=function(){
//     console.log("arr's function");
// }
// arr.myfunction();


// functions are also object;
// function fn(){
//     console.log("I am fn");
// }
// fn();

// fn.myprop="property on function";

// console.log("fn",fn.myprop);

// fn.fnMethod=function(){
//     console.log("I am method on a function");
// }
// fn.fnMethod();



/*
1. typeof => gives you type of the value inside a variable
2. because of a mistake typeof null is object
3. you have primitives and objects

1. anything apert form primitive ->
 a property or a method to that type
2. call apply bind are methods available on functions

**/ 