/******
 *  # que: you have three files
 * f1.txt
 * f2.txt
 * f3.txt
 * 1. You have to read all the files in sequential manner and 
 * 2. then conctenate there result in sequnetial order
 * 
 */

const fs = require("fs");
let finalString = "";

// fs.readFile("./f1.txt", function (err, content1) {
//     if (err) {
//         console.log("err", err);
//     } else {
//         console.log("first file read " + content1);
//         // i have read the first file 
//         finalString = finalString + content1;
//         // 2nd file
//         fs.readFile("./f2.txt", function (err, content2) {
//             if (err) {
//                 console.log("err", err);
//             } else {
//                 console.log("second file read " + content2);
//                 finalString = finalString + content2;
//                 fs.readFile("./f3.txt", function (err, content3) {
//                     if (err) {
//                         console.log("err", err);
//                     }else{
//                         console.log("third file read " + content3); 
//                         finalString=finalString+content3;
//                         console.log("final data",finalString)
//                     }
//                 })
//             }
//         })
//     }
// })

/**
 * 
 * Task
 * sequential -> task  
 *      synchonronous
 *      asynchronous : calling next async in cb first of current async 
 * parallel -> task
 *  asynchronous function -> fs.readFile
 * 
 * Tools
 * asynchronous function  -> fs.readFile
 * synchronous function  -> fs.readfileSync
 * 
 * ***/


// console.log(first) //1. 
// fs.readFile(f1.txt,function(){

//     console.log("data",data) //2. 
// });
// console.log(second) //3. 

/***
 * Observation
 * 1.  dependecy on the prev task to do the current ->task sequentially  using asynchronous function
 *      2. you will do the next async fn in the cb of the  current fn 
 *          3. you are introducing nesting in your code   
 * `Cb hell` ->refers to a situation in JavaScript  where deeply nested callbacks make 
 *          asynchronous code difficult to read, maintain, and debug
 * `what actually is cb hell ??`
 * * inversion of control because you pas your cb function to the asynchronous function and it has total control
 * `why are promises better` 
 * * inversion of control but the  promises are reosolved or rejected once in there lifetime -> cb will be called once 
 * * cbs of promises that are added to then ,catch -> a special queue i.e : microtask queue that has higher priority then 
 * normal cb  queue
 * 
 * ***/
fs.readFile("./f1.txt", cb1)
function cb1(err, content1) {
    if (err) {
        console.log("err", err);
    } else {
        console.log("first file read " + content1);
        // i have read the first file 
        finalString = finalString + content1;
        // 2nd file
        fs.readFile("./f2.txt", cb2)
    }
}
function cb2(err, content2) {
    if (err) {
        console.log("err", err);
    } else {
        console.log("second file read " + content2);
        finalString = finalString + content2;
        fs.readFile("./f3.txt", cb3)
    }
}
function cb3(err, content3) {
    if (err) {
        console.log("err", err);
    } else {
        console.log("third file read " + content3);
        finalString = finalString + content3;
        console.log("final data", finalString)
    }
}