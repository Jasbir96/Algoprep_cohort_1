const express = require("express");
const app = express();


function getHandler(req, res) {
    console.log("Recieved get Request");
    const postData = {
        "id": 1,
        "title": "His mother had always taught him",
        "body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
        "tags": [
            "history",
            "american",
            "crime"
        ],
        "reactions": {
            "likes": 192,
            "dislikes": 25
        },
        "views": 305,
        "userId": 121
    }

    res.status(200).json(postData);
}

// get request 
app.get("/posts", getHandler)


// server start
app.listen(3000, function () {
    console.log("server is running at port 3000");
}) 