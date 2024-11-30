**Functional Programming in JavaScript: A Deep Dive**

**Understanding the Core Concepts**

Functional programming is a paradigm that treats functions as first-class citizens. This means functions can be assigned to variables, passed as arguments to other functions, and returned from functions. Key concepts include:

**1. Pure Functions**

- **Definition:** A pure function is a function that:
    - Always returns the same output for the same input.
    - Has no **side effects** (does not modify external state).
- **Example:**
    ```JavaScript
    function add(a, b) {
        return a + b;
    }
    ```
    
    This function always returns the sum of `a` and `b`, and it doesn't modify any variables outside its scope.


**2.Immutability**
- **Definition:** Immutability is the practice of avoiding modifications to existing data. Instead, new data structures are created.
- **Example:**
    ```JavaScript
    const originalArray = [1, 2, 3];
    const newArray = originalArray.concat(4); // Create a new array
    
    console.log(originalArray); // Output: [1, 2, 3]
    console.log(newArray);     // Output: [1, 2, 3, 4]
    ```

**3.Functional Composition**

- **Combining Functions:**
    ```JavaScript
    const compose = (f, g) => x => f(g(x));
    
    const square = x => x * x;
    const double = x => x * 2;
    
    const squareThenDouble = compose(double, square);
    console.log(squareThenDouble(3)); // Output: 18
    ```

**4. Higher-Order Functions**
- **Definition:** A higher-order function is a function that takes one or more functions as arguments or returns a function.
- **Example:**
    
    
    ```JavaScript
    function multiplyByTwo(num) {
        return num * 2;
    }
    
    function applyFunction(func, num) {
        return func(num);
    }
    
    let result = applyFunction(multiplyByTwo, 5); // Output: 10
    ```
    
    Here, `applyFunction` is a higher-order function that takes a function and a number as arguments.

**currying, closure**

