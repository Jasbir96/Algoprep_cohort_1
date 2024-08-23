/** 
 * koi bhi feature -> module require krna padta 
 fs module used to anything that possible with files and folder
 file -> read, write , update ,delete
 folder -> content check , rename , delete
 * */
const fs = require("fs");
/**********file me write***********/
let fileName = "file.txt";
let content = "Content added through nodejs";

//synchronous version 
// console.log("```: adding content to file");
// fs.writeFileSync(fileName, content);
// console.log("```: added content to file");

// asynchronous version
// console.log("Before");

// fs.writeFile(fileName, content, function (err, data) {
//     if (err) {
//         console.log("something went wrong");
//     } else {
//         console.log("FIle is wriitem comfortably")
//     }
// })

// console.log("after");

// readfile 
// const contentofFile = fs.readFileSync(fileName);
// console.log("content: " + contentofFile);

// update file
// fs.appendFileSync(fileName,"Appending my data")


/*****************folders*********************/
// console.log("creating folder");
// fs.mkdirSync("lecture-1");
// console.log("created folder");

// deletion
// console.log("removing lecture-1");
// fs.rmdirSync("lecture-1");
// console.log("removed lecture-1");





