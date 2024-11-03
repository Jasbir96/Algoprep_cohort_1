let person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA',
        postCodes: {
            firstBlock: 10,
            secondBlock: 12
        }
    }
}
// person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     "address.street": 'North 1st street',
//     "address.city": 'San Jose',
//     "address.state": 'CA',
//     "address.country": 'USA',
//     "address.postCodes.firstBlock": 10,
//     "address.postCodes.secondBlock": 12
// }


const serializeObjUtil=function(srcObject) {
    const result = {}
    for (let key in srcObject) {
        let innerElem = srcObject[key];
        if (typeof innerElem != "object" || innerElem == null) {
            result[key] = innerElem;
        } else {
            console.log("innerElem",key);
            const innerSerializedObject = serializeObjUtil(innerElem)
            for (let innerKey in innerSerializedObject) {
                result[key + "." + innerKey] = innerSerializedObject[innerKey];
            }
        }
    }
    return result;
}


const serializedobj = serializeObjUtil(person);

console.log("serializedObj", serializedobj);
