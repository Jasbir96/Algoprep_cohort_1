

function add(a, b) {
    return a + b;
}

let a = 10;

function addImpure(b) {
    a = a + b;
    return a;

}

// console.log(add(3, 4));
// console.log(add(3, 4));
console.log( addImpure(20));
console.log(addImpure(20));