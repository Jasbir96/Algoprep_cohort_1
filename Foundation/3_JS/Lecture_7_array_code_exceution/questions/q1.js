// Write a JavaScript function called `advancedManipulation` that performs the following operations on an array of strings:

// 1. Insert the string `"new"` at the second position in the array.
// 2. Remove the third element from the array.
// 3. Join all elements of the array into a single string, separated by a comma.


function advancedManipulation(words) {
    let firstWord = words.shift();
    words.unshift("new");
    words.unshift(firstWord);

    // remove
    words.splice(2, 1);

    // join
    let joinedStr = words.join(",");
    return joinedStr



}

let words = ["apple", "banana", "cherry", "date"];
let result = advancedManipulation(words);
console.log(result); // Output: "apple,new,cherry,date"

