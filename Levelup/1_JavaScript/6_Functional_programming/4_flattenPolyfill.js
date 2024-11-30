
// const input = [1, 2, 3, [4, 5], [6, [7, [8]], [9, 10, 11]]];
Array.prototype.myFlat = function (depth = 1) {
    const flattenArray = [];
    const flattenArrayUtil = function (inputArray, currentDepth) {
        for (let idx = 0; idx < inputArray.length; idx++) {
            let elem = inputArray[idx];
            const isArray = Array.isArray(elem);
            if (isArray && currentDepth > 0) {
                flattenArrayUtil(elem, currentDepth - 1);
            } else {
                flattenArray.push(elem);
            }
        }
        return flattenArray;
    }
    flattenArrayUtil(this, depth);
    return flattenArray;
}




const arr1 = [0, 1, 2, [3, 4]];

// //arr=[0,1,2,3,4]

console.log(arr1.myFlat());


const arr2 = [0, 1, [2, [3, [4, 5]]]];


console.log(arr2.myFlat());
//[0,1,2,[3,[4,5]]]]

console.log(arr2.myFlat(2));


console.log(arr2.myFlat(Infinity));