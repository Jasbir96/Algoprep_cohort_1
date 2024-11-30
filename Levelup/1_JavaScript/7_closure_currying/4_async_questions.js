
console.log("Before");


// for (var i = 0; i < 3; i++) {
//     function cb() { console.log("i", i) }
//     setTimeout(cb, 1000);
// }

// console.log("After");


// for (let i = 0; i < 3; i++) {
//     function cb() { console.log("i", i) }
//     setTimeout(cb, 1000);
// }

// console.log("After");

let i;
for ( i = 0; i < 3; i++) {
    function cb() { console.log("i", i) }
    setTimeout(cb, 1000);
}

console.log("After");


