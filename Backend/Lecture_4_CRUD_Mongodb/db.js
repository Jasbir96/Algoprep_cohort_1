const mongoose = require("mongoose");
const express = require("express");
const app = express();
const dotenv = require("dotenv")
dotenv.config();

const dbLink = `mongodb+srv://${process.env.DB_USERNAME}
:${process.env.DB_PASSWORD}@cluster0.zc5df.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(dbLink)
    .then(function (connection) {
        console.log("connected to db")
    }).catch(err => console.log(err))




/****************************************************************************/


// user create -> Jio cinema  -> set of rules
const schemaRules = {
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    },
    confirmPassword: {
        type: String,
        required: true,
        minLength: 6,
        // custom validation
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    isPremium: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        // these are the only possible values for the role
        enum: ["user", "admin", "feed curator", "moderator"],
        default: "user"
    }

}
const userSchema = new mongoose.Schema(schemaRules);
// final touche point
const UserModel = mongoose.model("User", userSchema);

/**
 * create -> UseModel.create(object);
 * 
 * **/


app.use(express.json());
// middleWare -> user -> object is not empty
app.post("/user", async function (req, res) {
    try {
        const userObject = req.body;

        const user = await UserModel.create(userObject);
        // send back the created user with status 201 (created)
        res.status(201).json(user);

    } catch (err) {
        res.status(500).json({
            message: "internal server error",
            error: err,
        })
    }
})





app.listen(3000, function () {
    console.log("Server started on port 3000")
})

