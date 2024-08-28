const mongoose = require("mongoose");

const dotenv = require("dotenv")
dotenv.config({ path: "./Lecture_3_middleWare_db/.env" });

const dbLink = `mongodb+srv://${process.env.DB_USERNAME}
:${process.env.DB_PASSWORD}@cluster0.zc5df.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(dbLink)
    .then(function (connection) {
        console.log("connected to db")
    }).catch(err => console.log(err))