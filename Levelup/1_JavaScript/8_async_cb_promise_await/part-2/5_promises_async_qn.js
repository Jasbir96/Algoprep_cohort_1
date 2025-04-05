


console.log("A");

Promise.resolve()
.then(() => {
    console.log("B");
    return Promise.resolve();
}).then(() => {
    console.log("C");
})

setTimeout(() => {
    console.log("D");
})
console.log("E");

// A E -> sync 
//   B  C -> microtaskQueu
//  D -> setTimeout
