const fs = require("fs");
const lectureNames = ["intro to backend dev with Nodejs", "Intro to Express and postman",
    "Mongodb and mongoose", "MVC architecture and REST API", "Data validation and hooks in mongoose"
]


for (let i = 0; i < lectureNames.length; i++) {
    // folder name 
    let currentFolderName = `Lecture-${i + 1}-${lectureNames[i]}`;
    // function folder creation
    fs.mkdirSync(currentFolderName);
    // writeFileSync
    let filePath = `${currentFolderName}/readme.md`;
    fs.writeFileSync(filePath, "# Agenda");
    console.log("created folder: ", currentFolderName);

}