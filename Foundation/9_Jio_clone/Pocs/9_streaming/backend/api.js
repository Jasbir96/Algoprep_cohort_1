const express = require('express');
const app = express();
const fs = require("fs");// wihout streaming
const cors=require("cors");
app.use(cors());

app.get("/memoryIntensive", function (req, res) {
    console.log("reading the content -> SSD -> ram");
    const fileContent = fs.readFileSync("chat-app.zip");
    console.log("content read finish");
    res.send(fileContent);
})


app.get("/streamfile", function (req, res) {
    console.log("file readStream created");
    // const fileStreamInstance = fs.createReadStream("chat-app.zip");
    const videoStreamInstance = fs.createReadStream("1.mp4");
    // request , response -> streams 
    // request -> readble stream 
    // response -> writable stream
    res.writeHead(200, {
        "Content-Type": "video/mp4"
    })
    videoStreamInstance.pipe(res);
})

app.listen(3000, function () {
    console.log("server is runnig at port 3000");
})