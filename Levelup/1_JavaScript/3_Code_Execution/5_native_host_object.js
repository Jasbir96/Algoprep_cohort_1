// native vs host objects
/**
 * EC : 
 *      vars , fns
 *      outer scope
 *      this
 *      host object 
 *          * window object(browser)
 *          * global object(nodejs)
 * **/
// hello=10;
// console.log(hello);
// console.log("hello", window.hello);


/*** fact-1
 * JS -> only has the logic 
 * Enviornment -> Provides the feature
 * 
 * */

/***
 * fact-2
 * How does Enviornment help us to use these features 
 * -> Objects
 * **/ 

/**fact-3
 * Native object : 
 * that are part of JS -> Array, Date , errors , Promises
 * Host Object: that are given to you by your env : window , document , console, localstorage ,fetch
 * **/