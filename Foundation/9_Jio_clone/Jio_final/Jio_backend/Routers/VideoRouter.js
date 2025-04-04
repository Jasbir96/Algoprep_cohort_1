const express = require("express");
const VideoRouter = express.Router();
const {
    getVideoStream,
    getAllVideos,
    getThumbnail
} = require("../controllers/VideoController.js");
/***********routes**************/

VideoRouter.get("/", getAllVideos);
VideoRouter.get("/watch", getVideoStream);
VideoRouter.get("/thumbnail", getThumbnail);

module.exports = VideoRouter;