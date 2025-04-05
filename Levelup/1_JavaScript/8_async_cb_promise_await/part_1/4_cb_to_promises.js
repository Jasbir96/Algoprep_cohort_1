/**
 * Question : convert fs.readFile  into a promise based function
 * steps
 * 1.  check the input taken by  the promise based functions  -> pass to the polyfill
 * 2. retrun new Promise
 * 3. call resolve where you think task is done
 * 4. call reject in the case where you think  there is a failure case
 *  */  


const fs=require("fs")
function promisifiedFsReadFile(filePath) {
    return new Promise(function (resolve, reject) {
        // resolve call -> value -> then function will be called 
        // reject call -> err -> catch function will be called 
        fs.readFile(filePath, cb);
        function cb(err, data) {
            if (data) {
                resolve(data)
            } else {
                reject(err);
            }
        }
    });
}


console.log("before");

const promise = promisifiedFsReadFile("./f1.txt");
console.log("promise", promise);
/**
 * then is  an event listener over promise  -> fn when promise is resolved (task is done)
 * **/
promise.then(function (data) {
    console.log("then data" + data)
})

/***
 * catch -> is also an event listener on promises -> fn when promise is rejected(You get an erro)
 * */
promise.catch(function (err) {
    console.log("catch data", err)
})
console.log("After");