/*********************Polyfill of map***********************/
// -> loops through an array and 
//retrun a new  array after applying the cb to every element -> 

// Array.prototype.transformer = function ( cb) {
//     let newArr = [];
//     for (let i = 0; i < this.length; i++) {
//         let sqElem = cb(this[i]);
//         newArr.push(sqElem);
//     }
//     return newArr;
// }

// function squarerCb(elem) {
//     return elem * elem;
// }
// function cuberCb(elem) {
//     return elem * elem * elem;
// }
// function getFirstNameCb(elem) {
//     return elem.name;
// }

// let arr = [10, 20, 30, 40];

// let metaArr = [{ name: "Jasbir", lastName: "Singh" },
// { name: "Steve", lastname: "Rogers" }]

// let sqauredArr = arr.transformer(squarerCb);
// console.log("sqauredArr", sqauredArr);

// let cubeArr = arr.transformer(cuberCb);
// console.log("cubeArr", cubeArr);

// let firstNameArr = metaArr.transformer(getFirstNameCb);
// console.log("firstNameArr", firstNameArr);



/********************************forEach*************************/

// -> loops through an array and does not return anything -> 
// Array.prototype.myForEach = function (cb) {
//     for (let i = 0; i < this.length; i++) {
//         cb(arr[i], i);
//     }
// }
// let arr = [10, 20, 30];

// const cb = (val, idx) => {
//     console.log(idx, val)
// }
// // arr.forEach(cb)

// arr.myForEach(cb);


/*****************************Filter***************************/
/*traverse through every elem -> elem to cb fn if cb fn returns true
-> it will add that elem to a new Arr at the end it returns the new Arr*/
// let elems = [1, 2, 3, 11, 4, 5, 34, 12];
// function isOdd(elem) {
//     return elem % 2 == 1;
// }

// function isgtr5(elem) {
//     return elem > 5;
// }


// Array.prototype.myfilter = function (cb) {
//     let filteredArr = [];
//     for (let i = 0; i < this.length; i++) {
//         const isEligible = cb(this[i]);
//         if (isEligible)
//             filteredArr.push(this[i]);
//     }
//     return filteredArr;
// }

// // // odd values
// let isgtr5Arr = elems.myfilter(isgtr5);
// console.log("isgtr5Arr", isgtr5Arr);



/************************reduce is also an HOF : 
 * arry elem  -> loop , single value -> depending upon the operation of the cb
 * 
 * // cb -> two parameter 
 * // acc : you can pass it's initial value   with cb  but it is optional 
 *      -> reduce will call the cb for every elemmnet and store the retrun value in acc
 * ****************/
// 

let elems = [1, 2, 3, 4, 5];
// accumulator , value
function sumCb(acc, value) {
    return acc + value
}





Array.prototype.myReduce = function (cb, defaultValue) {
    //acc present -> you will set the default to it and start the loop from index 0
    //acc is not present -> you will take the first index value to be acc , looop from one
    let acc = defaultValue === undefined ? this[0] : defaultValue;
    let sidx = defaultValue === undefined ? 1 : 0;

    for (let i = sidx; i < this.length; i++) {
        acc = cb(acc, this[i]);
    }
    return acc;
}




// const sum = elems.reduce(sumCb);
// console.log("sum", sum);

// function productCb(acc, value) {
//     return acc * value;
// }
// const product = elems.reduce(productCb);
// console.log("product", product);
// console.log("````````````````````````````````````");


// const sumTemp=elems.myReduce(sumCb,1);
// console.log("sumTemp",sumTemp);
// const productTemp=elems.myReduce(productCb,1);
// console.log("productTemp",productTemp)






let arr = ["Apple", "Oranges ", "Banana", "Grapes"];
let elem = [1, 2, 12, 34, 22, 123];

// arr.sort();
// console.log(arr);
// elem.sort();
// console.log(elem);

function comparater(a, b) {
    if (a > b) {
        return -1;
    }
    else if (a < b) {
        return +1;
    }
    else {
        return  0;
    }
}

elem.sort(comparater);
console.log(elem);


//  Mercedes , Swift , Alto , Thar
// mileage
// price 















