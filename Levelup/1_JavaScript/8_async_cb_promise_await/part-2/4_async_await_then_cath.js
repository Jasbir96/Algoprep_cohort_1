const fs = require("fs");
console.log("before");

const promise = fs.promises.readFile("./f1.txt");


async function fn() {
    try {
        const futureValue = await promise;
        console.log("Data inside the file is " + futureValue);
    }catch(err){
        console.log("err", err);
    }
}
fn();

// promise
//     .then(function (futureValue) {
//         console.log("Data inside the file is " + futureValue);
//     })
// promise
//     .catch(function (err) {
//         console.log("err", err);
//     })


console.log("After");