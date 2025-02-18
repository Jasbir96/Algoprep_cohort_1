const mongoose = require("mongoose");
const express = require("express");
const app = express();
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser");
dotenv.config();

/*****************db connection***************/
const dbLink = `mongodb+srv://${process.env.DB_USERNAME}
:${process.env.DB_PASSWORD}@cluster0.zc5df.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(dbLink)
    .then(function (connection) {
        console.log("connected to db")
    }).catch(err => console.log(err))

/*******************************************/



/****************routes and there handlers*******************/
const { createUser, getAllUser, getUser, deleteUser } = require("./userController");
const UserModel = require("./userModel");

app.use(express.json());
app.use(cookieParser());
// middleWare -> user -> object is not empty



/**************auth ke methods and route************/

const jwt = require("jsonwebtoken");
const util = require("util");
const promisify = util.promisify;
const promisdiedJWTsign = promisify(jwt.sign);
const promisdiedJWTverify = promisify(jwt.verify);


// handler functions
async function signupHandler(req, res) {
    // 3. create the user
    try {
        const userObject = req.body;
        // 1. user -> data get , check email , password
        if (!userObject.email || !userObject.password) {
            return res.status(400).json({
                "message": "required data missing",
                status: "failure"
            })
        }
        // 2. email se check -> if exist -> already loggedIn 
        const user = await UserModel.findOne({ email: userObject.email });
        if (user) {
            return res.status(400).json({
                "message": "user is already logged in",
                status: "success"
            })
        }
        const newUser = await UserModel.create(userObject);
        // send a response 
        res.status(201).json({
            "message": "user signup successfully",
            user: newUser,
            status: "failure"
        })
    } catch (err) {
        console.log("err", err);
        res.status(500).json({
            message: err.message,
            status: "failure"
        })
    }
}

async function loginHandler(req, res) {
    try {

        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json({
                message: "Invalid email or password",
                status: "failure"
            })
        }
        const areEqual = password == user.password;
        if (!areEqual) {
            return res.status(400).json({
                message: "Invalid email or password",
                status: "failure"
            })
        }

        // token create
        const authToken = await promisdiedJWTsign({ id: user["_id"] }, process.env.JWT_SECRET_KEY);
        // // token -> cookies
        res.cookie("jwt", authToken, {
            maxAge: 1000 * 60 * 60 * 24,
            httpOnly: true, // it can only be accessed by the server
        })
        // // res send 
        res.status(200).json({
            message: "login successfully",
            status: "success",
            user: user
        })



    } catch (err) {
        console.log("err", err);
        res.status(500).json({
            message: err.message,
            status: "failure"
        })
    }
}
async function protectRouteMiddleware(req, res, next) {
    try {
        // cookies token get 
        const token = req.cookies.jwt;

        if (!token) {
            return res.status(401).json({
                message: "unauthorized access",
                status: "failure"
            })
        }
        //  token verify
        const decryptedToken = await promisdiedJWTverify(token, process.env.JWT_SECRET_KEY);
        // token identifier
        req.id = decryptedToken.id;
        next();


    } catch (err) {
        console.log("err", err);
        res.status(500).json({
            message: "internal server error",
            status: "failure"
        })
    }

}

async function isAdminMiddleWare(req, res, next) {
    const id = req.id;
    const user = await UserModel.findById(id);
    if (user.role !== "admin") {
        return res.status(403).json({
            message: "you are not admin",
            status: "failure"
        })
    } else {
        next();
    }
}

async function profilehandler(req, res,) {
    try {
        const userId = req.id;
        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).json({
                message: "user not found",
                status: "failure"
            })
        }
        res.json({
            message: "profile worked",
            status: "success",
            user: user
        })
    } catch (err) {
        console.log("err", err);
        res.status(500).json({
            message: err.message,
            status: "failure"
        })
    }

}

async function logoutHandler(req, res) {
    try {
        res.clearCookie('jwt', { path: "/" });
        res.json({
            message: "logout successfully",
            status: "success"
        })

    } catch (err) {
        res.status(500).json({
            message: err.message,
            status: "failure"
        })
    }

}
app.post("/login", loginHandler);
app.post("/signup", signupHandler);

app.get("/logout", logoutHandler)

app.get("/profile", protectRouteMiddleware, profilehandler)
// user handler function 
app.post("/user", createUser)
app.get("/user", protectRouteMiddleware, isAdminMiddleWare, getAllUser);
app.get("/user/:id", getUser);
app.delete("/user/:id", protectRouteMiddleware, deleteUser);

app.listen(3001, function () {
    console.log("Server started on port 3000")
})


/***
 * Ques 
 * given a valid  of roles  -> verify that the current user is allowed to access a route or not 
 * ex : getAlluser -> [admin, moderator]
 * ex : deletUser -> [admin, moderator]
 * ex : allmovies -> [admin, moderator, fee curator]
 * 
 * **/ 
