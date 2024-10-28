

/**
 * 
 * assignment-> 
 * non-primtives: reference copy
 * primitives: value copy 
 * 
 *  */
// const arr = [10, 20, [30, 50, 60], 40];
// const arr2 = arr;

// console.log("arr", arr, "arr2", arr2);

// arr2[1]=100;
// console.log("`````````````````````````");
// console.log("arr", arr, "arr2", arr2);

// let a=10;
// let b=a;
// b=100;
// console.log("a",a,"b",b);

/*****
 * 1. shallow copy -> one level of data copy
 *  */


// const arr = [10, 20, [30, 50, 60], 40];
// const arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//     arr2.push(arr[i]);
// }

// 1. spread of array
// const arr2=[...arr];

// console.log("arr", arr, "arr2", arr2);
// arr2[1]=100;
// console.log("`````````````````````````");
// console.log("arr", arr, "arr2", arr2);

// a. spread
// spread an object 
// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     address: {
//         street: 'North 1st street',
//         city: 'San Jose',
//         state: 'CA',
//         country: 'USA'
//     },
// };

// let keys = Object.entries(person);
// const person2 = [];
// for (let i = 0; i < keys.length; i++) {
//     person2[keys[i]] = person[keys[i]];
// }
// // let person2={...person};
// console.log("person", person)
// console.log("person2", person2);
// console.log("```````````````````````````");
// person2.firstName = "loki";
// console.log("person", person)
// console.log("person2", person2);


// function fn(...params) {

//     console.log(params);
// }
// fn(1,2,3,4);
// fn(1,2,3);

//  2. Object assign 
// let copiedObject = Object.assign({}, person);

// console.log("person", person)
// console.log("copiedObject", copiedObject);
// console.log("```````````````````````````");
// copiedObject.firstName = "loki";
// console.log("person", person)
// console.log("copiedObject", copiedObject);


/***
 * deep copy/clone -> copying all the values however nested the data is 
 * 
 * **/

// 1. structured clone -> browser (not widely supported)(object arr )
// const arr = [10, 20, [30, 50, 60], 40];

// const deepCopiedArray=structuredClone(arr);
// deepCopiedArray[2][1]=100;
// console.log("arr",arr,"deepCopiedArray",deepCopiedArray);


// console.log("````````````````````````````")


// const spreadArr = [...arr];
// spreadArr[2][1]=1000;

// console.log("arr", arr, "spreadArr", spreadArr)


//2. JSON.stringify and JSON.parse();-> (object) -> slow process 
// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     address: {
//         street: 'North 1st street',
//         city: 'San Jose',
//         state: 'CA',
//         country: 'USA'
//     },
// };

// // converted into string -> stringify
// let stringObject = JSON.stringify(person);
// // string -> parse -> object
// let newObject = JSON.parse(stringObject);














