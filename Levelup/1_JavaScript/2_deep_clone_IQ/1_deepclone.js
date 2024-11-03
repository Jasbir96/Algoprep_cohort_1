

/***
 * You have create an utility function -> `superClone`, 
 * that accepts and object  and  return deepclone Object
 * **/

const person = {
    firstName: 'John',
    lastName: 'Doe',
    newName: null,
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


const superClone= (srcObject)=> {
    const result = {}
    //logic
    // loop through all the keys and check
    // 1. obj[key] -> is primitive -> data copy
    // 2.  obj[key]-> object then you would copy the data  
    for (let key in srcObject) {
        let value = srcObject[key];
        if (typeof value != "object" || value == null) {
            result[key] = value;
        } else {
            const innerObject = superClone(value);
            result[key] = { ...innerObject };
        }
    }
    return result;
}


const deeplyClonedObject = superClone(person);
console.log("deepcloneObject", deeplyClonedObject);
person.lastName = "loki";
person.address.street = "13";
person.address.postCodes.firstBlock = 18
console.log(" ````````");
console.log("person", person);
console.log("deepcloneObject", deeplyClonedObject);





