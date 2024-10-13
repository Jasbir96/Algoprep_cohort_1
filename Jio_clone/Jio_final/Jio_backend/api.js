const mongoose = require("mongoose");
const express = require("express");
const app = express();
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser");
const UserModel = require("./userModel");
const emailSender = require("./DynamicEmailSender");
const { getCurrentMovies, getTopRatedMovies } = require("./controllers/movieController");

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
        // hash the new user password
        // send a response 
        res.status(201).json({
            "message": "user signup successfully",
            user: newUser,
            status: "success"
        })

        // user Email -> verification of there Email Id 
        // welcome Email 
    } catch (err) {
        console.log("err", err);
        res.status(500).json({
            message: err.message,
            status: "failure"
        })
    }
}
async function loginHandler(req, res) {
    // email,password -> if exist -> allow login 
    //  cookies -> JWT -> they will bring back the token -> protected Route
    try {

        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json({
                message: "Invalid email or password",
                status: "failure"
            })
        }
        // hash the password   
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

const otpGenerator = function () {
    return Math.floor(100000 + Math.random() * 900000);
}

async function forgetPasswordHandler(req, res) {
    try {

        /****
         * 1. user send the email : extract email
         * 2. check if email is present in DB (user)
              * if email is not present -> send a response to the user(user not found)
           * *  if email is present -> 
           * 3. create basic otp -> 
           *        * user  ke saath token map krdo
           *        *  send to the email
           * 4. url -> reset url -> id      
         *         
         * ***/
        //1.
        if (req.body.email == undefined) {
            return res.status(401).json({
                status: "failure",
                message: "Please enter the email for forget Password"
            })
        }
        //2.
        const user = await UserModel.findOne({ email: req.body.email });
        if (user == null) {
            return res.status(404).json({
                status: "failure",
                message: "user not found for this email"
            })
        }
        //3. 
        const otp = otpGenerator();
        user.otp = otp;
        user.otpExpiry = Date.now() + 1000 * 60 * 10;

        await user.save({ validateBeforeSave: false });
        //  send email
        // email -> req.body.email
        // otp -> add 

        res.status(200).json({
            message: "otp is send successfully",
            status: "success",
            otp: otp,
            resetURL: `http:localhost:3000/api/auth/resetPassword/${user["_id"]}`
        })
        const templateData = { name: user.name, otp: user.otp }
        await emailSender("./templates/otp.html", user.email, templateData);
    } catch (err) {
        console.log("err", err);
        res.status(500).json({
            message: err.message,
            status: "failure"
        })
    }
}

async function resetPasswordHandler(req, res) {
    try {
        /**
         * 1. id ,  id
         * 2. if otp , password , confirmPassword are present
         *      *  otp should n't be expires
         *      * otp compare -> if matches
         *      *  password update
         *      *  re-route them to login page
         * ***/
        let resetDetails = req.body;
        // required fields are there or not 
        if (!resetDetails.password || !resetDetails.confirmPassword
            || !resetDetails.otp
            || resetDetails.password != resetDetails.confirmPassword) {
            res.status(401).json({
                status: "failure",
                message: "invalid request"
            })
        }
        const userId = req.params.userId;
        const user = await UserModel.findById(userId);
        // if user is not present
        if (user == null) {
            return res.status(404).json({
                status: "failure",
                message: "user not found"
            })
        }
        // if otp is not present  in db user
        if (user.otp == undefined) {
            return res.status(401).json({
                status: "failure",
                message: "unauthorized acces to reset Password"
            })
        }

        // if otp is expired
        if (Date.now() > user.otpExpiry) {
            return res.status(401).json({
                status: "failure",
                message: "otp expired"
            })
        }
        // if otp is incorrect
        if (user.otp != resetDetails.otp) {
            return res.status(401).json({
                status: "failure",
                message: "otp is incorrect"
            })
        }
        user.password = resetDetails.password;
        user.confirmPassword = resetDetails.confirmPassword;
        // remove the otp from the user
        user.otp = undefined;
        user.otpExpiry = undefined;
        await user.save();
        res.status(200).json({
            status: "success",
            message: "password reset successfully"
        })

    } catch (err) {
        console.log("err", err);
        res.status(500).json({
            message: err.message,
            status: "failure"
        })
    }
}





// upcomig implemnet

app.get("/api/movies/currentPlaying", getCurrentMovies);
app.get("/api/movies/topRated", getTopRatedMovies);






app.post("/api/auth/login", loginHandler);
app.post("/api/auth/signup", signupHandler);
app.patch("/api/auth/forgetPassword", forgetPasswordHandler);
app.patch("/api/auth/resetPassword/:userId", resetPasswordHandler);


app.listen(3001, function () {
    console.log("Server started on port 3001");
})




