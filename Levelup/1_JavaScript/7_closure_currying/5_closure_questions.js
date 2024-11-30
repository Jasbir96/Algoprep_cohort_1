// version -1 : 3,3,3
// function outer() {
//     let arrFn = [];
//     for (var i = 0 ;i < 3; i++) {
//         arrFn.push(function fn() {
//             console.log("i",i);
//         })
//     }
//     return arrFn;
// }

// let arrFn = outer();
// // what will be the output of this problem
// arrFn[0]();
// arrFn[1]();
// arrFn[2]();

// version -2 
// function outer() {
//     let arrFn = [];
//     let i
//     for ( i = 0; i < 3; i++) {
//         arrFn.push(function fn() {
//             console.log("i", i);
//         })
//     }
//     return arrFn;
// }

// let arrFn = outer();
// // what will be the output of this problem
// arrFn[0]();
// arrFn[1]();
// arrFn[2]();


// version -3 : 0,1,2
// function outer() {
//     let arrFn = [];
    
//     for (let i = 0; i < 3; i++) {
//         arrFn.push(function fn() {
//             console.log("i", i);
//         })
//     }
//     return arrFn;
// }

// let arrFn = outer();
// what will be the output of this problem
// arrFn[0]();
// arrFn[1]();
// arrFn[2]();

//version-4  : 0,1,2



 function outer() {
    let arrFn = [];
    
    for (var i = 0; i < 3; i++) {
        arrFn.push((function(){
            var j=i;
            return function fn() {
                console.log("i", j);
            }
        })())
    }
    return arrFn;
}

let arrFn = outer();
// what will be the output of this problem
arrFn[0]();
arrFn[1]();
arrFn[2]();



