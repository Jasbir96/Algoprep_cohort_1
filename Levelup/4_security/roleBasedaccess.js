const express = require("express");
const app = express();




function authenticateMiddleWare(req, res, next) {
    // code for authenticating -> user if logged in or not 

    // -> token -> user -> role -> next
}


function authorizeTheseUsers(validRoles) {
    return function (req, res) {
        const isValid = validRoles.find((role) => role == req.role);
        if (isValid) {
            next();
        } else {
            res.status(403).json({
                message: "not authorzied "
            })
        }
    }

}


// authentciate
app.use(authenticateMiddleWare);

app.get("/feed", authorizeTheseUsers(["user", "admin", "feedcurator", "moderator"]), getFeed)
app.get("/feed", authorizeTheseUsers(["admin", "feedcurator", "moderator"]), updateFeed)
app.get("/feed", authorizeTheseUsers(["admin", "moderator"]), deleteMovie)
app.get("/feed", authorizeTheseUsers(["admin"]), createMovie)
app.get("/feed", authorizeTheseUsers(["admin", "feedcurator"]), createFeed)


// target
function getFeed(req, res) {

}

function updateFeed(req, res) {

}


function deleteMovie() {

}

function createMovie() {

}
function createFeed() {

}

