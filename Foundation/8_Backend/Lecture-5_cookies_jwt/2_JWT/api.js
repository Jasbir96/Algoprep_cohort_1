const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

const jwt = require("jsonwebtoken");

const util = require("util");
const promisify = util.promisify;

const promisdiedJWTsign = promisify(jwt.sign);
const promisdiedJWTverify = promisify(jwt.verify);

app.use(cookieParser());

const SECRET_KEY = "abraacdbra";

// token creation
app.get("/sign", async function (req, res) {
    // token create
    const authToken = await 
    promisdiedJWTsign({ "payload": "sdjhbfsdjhb" }, SECRET_KEY);
    // token -> cookies
    res.cookie("jwt", authToken, {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true, // it can only be accessed by the server
    })
    // res send 
    res.status(200).json({
        message: "signed the jwt and sending it in the cookie"
    })
})
// token verification
app.get("/verify", async function (req, res) {
    if (req.cookies && req.cookies.jwt) {
        const authToken = req.cookies.jwt;
        const unlockedToken = await promisdiedJWTverify(authToken, 
            SECRET_KEY);
        res.status(200).json({
            message: "jwt token is verified",
            "unlockedToken":unlockedToken
        })

    } else {
        res.status(400).json({
            message: "no jwt token found"
        })
    }
})

// server -> run on a port 
app.listen(3000, function () {
    console.log(` server is listening to port 3000`);
})