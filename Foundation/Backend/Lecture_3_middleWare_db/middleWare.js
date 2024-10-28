const express = require("express");
const app = express();


// -> /posts , post -> createPost

function beforeFn(req, res, next) {
    console.log("Before called");
    // console.log("req.body", req.body);
    const length = Object.keys(req.body).length;
    if (length > 0 && req.body.name && req.body.userId) {
        const fullNameNamArr = req.body.name.split(" ");
        req.body.firstName = fullNameNamArr[0];
        req.body.lastName = fullNameNamArr[1];
        next();
    } else {
        res.status(400).json({
            message: "bad request"
        })
    }
}
function AfterFn(req, res) {
    console.log("after fn called");
    console.log("req.body", req.body);

    res.status(200).json({
        message: "response send",
        body: req.body
    })
}


app.post(express.json());
app.patch(express.json());
app.post("/posts", beforeFn);
app.post("/posts", AfterFn);




app.use(function (req, res) {
    res.status(404).json({
        message: "404 page not found ",

    })

})



app.listen(3000, function () {
    console.log("Server running at port 3000");
})

