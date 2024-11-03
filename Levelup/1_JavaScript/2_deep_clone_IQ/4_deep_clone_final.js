const person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    },
    friends: ["Steve", "Nikola", "Ray", { name: "Jai", lastName: "Roy" }]
};

const arr = [{
    name: "Jasbir"
}, 10]

//  create a generic deepclone method that create deep clone of array and objects
// here array's can contain objects and objects can contains array
const superClone = (srcObject) => {
    // srcobject -> it is an array or object
    const isSrcArr = Array.isArray(srcObject);

    const result = isSrcArr ? [] : {}
    // loop keys
    for (let key in srcObject) {
        const innerElem = srcObject[key];
        // 1. if primitives values -> copy it it 
        if (typeof innerElem != "object" || innerElem == null) {
            result[key] = innerElem;
            // 2. if array -> superclone
        } else if (Array.isArray(innerElem)) {
            // spread -> values
            let newArr = [...innerElem];
            // reference type value
            for (let idx = 0; idx < newArr.length; idx++) {
                if (typeof newArr[idx] == "object" && newArr[idx] != null) {
                    newArr[idx] = superClone(newArr[idx]);
                }
            }
            result[key] = newArr;
        } else {
            const innerObject = superClone(innerElem);
            result[key] = { ...innerObject };
        }
    }
    // 3. if object -> superclone
    return result;
}


const deepCloneObject = superClone(person);
console.log("deepClonedObject", deepCloneObject);
console.log("``````````````````");
const deepCloneArr=superClone(arr);
console.log("arr",deepCloneArr);