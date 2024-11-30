##  Application of Closures

Listed below are the application of closure

### 7.1 Currying

* Currying involves splitting up a function that accepts multiple arguments into several functions that only accept one parameter each. 
* It allows you to provide some arguments upfront while delaying the provision of others.

```javascript
function getFirstName(firstName) {
    console.log("I have got your first Name");
    return function getLastName(lastName) {
        console.log("I have got Your last Name");
        return function greeter() {
            console.log(`Hi I am ${firstName} ${lastName}`);  // closure 
        }
    }
}

const getLastName = getFirstName("Jasbir");
console.log("Task in between");
const greeter = getLastName("Singh");
console.log("Task in between");
greeter();
```


### 7.2 Closure with Async code

```javascript
let a=100;
console.log("Before");
function cb() {
    console.log("I will explode",a);
}
setTimeout(cb, 2000);
console.log("After");
```