const express = require("express");
const VideoRouter = express.Router();
const {
    getVideoStream,
    getAllVideos,
} = require("../controllers/VideoController.js");
/***********routes**************/

VideoRouter.get("/", getAllVideos);
VideoRouter.get("/watch", getVideoStream);
module.exports = VideoRouter;