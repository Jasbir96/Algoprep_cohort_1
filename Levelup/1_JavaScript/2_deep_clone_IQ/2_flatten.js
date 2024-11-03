
const input = [1, 2, 3, [4, 5], [6, [7, [8],][9, 10, 11]]];

//  flaten array -> flat , level

const  flattenArrayUtil=function (inputArray) {
    let flattenArray = [];
    //logic
    for (let idx = 0; idx < inputArray.length; idx++) {
        let elem = inputArray[idx];
        const isArray = Array.isArray(elem);
        if (!isArray) {
            flattenArray.push(elem);
        } else {
           const flatArray= flattenArrayUtil(elem);
            flattenArray.push(...flatArray);
        }
    }
    return flattenArray;
}


const flattenArray = flattenArrayUtil(input);
console.log("falltenArray", flattenArray);
