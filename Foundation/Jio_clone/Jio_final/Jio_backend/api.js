const mongoose = require("mongoose");
const express = require("express");
const app = express();
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser");


dotenv.config(); // env ke variables
/*****************db connection***************/
const dbLink = `mongodb+srv://${process.env.DB_USERNAME}
:${process.env.DB_PASSWORD}@cluster0.zc5df.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(dbLink)
    .then(function (connection) {
        console.log("connected to db")
    }).catch(err => console.log(err))

/*******************************************/

// middleWare -> user -> object is not empty
app.use(express.json());
app.use(cookieParser());

const AuthRouter = require("./Routers/AuthRouter");
const MovieRouter = require("./Routers/MovieRouter");

app.use("/api/auth", AuthRouter);
app.use("/api/movies", MovieRouter);


app.listen(3001, function () {
    console.log("Server started on port 3001");
})




