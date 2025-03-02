const bcrypt = require('bcrypt');


async function hashPassword(password) {
    console.time("time taken")
    // gen salt -> random string
    const salt = await bcrypt.genSalt(20);

    //  random string 
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log("hashedPassword", hashedPassword);
    console.log("***************")
    const isMatching = await bcrypt.compare(password, hashedPassword);
    console.log("isMatching",isMatching)
    console.timeEnd("time taken");
}
hashPassword("jasbir@123");



