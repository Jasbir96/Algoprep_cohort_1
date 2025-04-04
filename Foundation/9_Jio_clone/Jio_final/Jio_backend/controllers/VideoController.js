const fs = require("fs");
const path = require("path");

const getAllVideos = async (req, res) => {
    try {
        const videoDirectory = path.join(__dirname, "..", "videos");
        const files = fs.readdirSync(videoDirectory);

        const mp4Files = files.filter(
            (file) => path.extname(file).toLowerCase() === ".mp4"
        );

        const videoList = mp4Files.map((file) => ({
            id: path.parse(file).name,
            name: file,
        }));

        res.status(200).json({
            status: "success",
            data: videoList,
        });
    } catch (err) {
        console.error("Error fetching video list:", err);
        res.status(500).json({
            status: "error",
            message: "Failed to fetch video list",
        });
    }
};


const getVideoStream = async (req, res) => {
    try {
        let id = req.query.id; // ID of video to be streamed
        // Check if the header includes range
        const range = req.headers.range;
        if (!range) {
            res.status(400).send("Missing range header");
        }

        const videoPath = "videos/" + id + ".mp4"; // path of the video
        const videoSize = fs.statSync("videos/" + id + ".mp4").size; // size of the video

        // Parse Range
        const CHUNK_SIZE = 5 ** 6; // Half megabyte
        let start = Number(range.replace(/\D/g, ""));
        let end = Math.min(start + CHUNK_SIZE, videoSize - 1);

        // Create headers
        const contentLength = end - start + 1;
        const headers = {
            "Content-Range": `bytes ${start}-${end}/${videoSize}`,
            "Accept-Ranges": "bytes",
            "Content-Length": contentLength,
            "Content-Type": "video/mp4",
        };

        // HTTP Status 206 for Partial Content
        res.writeHead(206, headers);

        // create video read stream for this particular chunk
        const videoStream = fs.createReadStream(videoPath, { start, end });

        // Stream the video chunk to the client
        videoStream.pipe(res);
    } catch (err) {
        console.log(err);
    }
};

const getThumbnail = async (req, res) => {
    try {
        const { videoId } = req.query;
        if (!videoId) {
            return res.status(400).json({ error: 'Video ID is required' });
        }
        const thumbnailPath = path.join(__dirname, '..', 'thumbnails', `${videoId}.jpg`);       
        if (!fs.existsSync(thumbnailPath)) {
           await generateThumbnailUtil(videoId)
        }

        // Send the thumbnail
        res.sendFile(thumbnailPath);


    } catch (err) {

    }
}


const generateThumbnailUtil = async (videoId) => {
    try {
        const videoPath = path.join(__dirname, '..', 'videos', `${videoId}.mp4`);
        const thumbnailPath = path.join(__dirname, '..', 'thumbnails', `${videoId}.jpg`);

        // Ensure the thumbnails directory exists
        const thumbnailDir = path.dirname(thumbnailPath);
        if (!fs.existsSync(thumbnailDir)) {
            fs.mkdirSync(thumbnailDir, { recursive: true });
        }

        return new Promise((resolve, reject) => {
            // nodes 
            const ffmpeg = spawn('ffmpeg', [
                '-i', videoPath,
                '-ss', '00:00:01',
                '-frames:v', '1',
                thumbnailPath
            ]);

            ffmpeg.on('close', (code) => {
                if (code === 0) {
                    resolve(thumbnailPath);
                } else {
                    reject(new Error(`FFmpeg process exited with code ${code}`));
                }
            });

            ffmpeg.on('error', (err) => {
                reject(err);
            });
        });
    } catch (error) {
        console.error('Error generating thumbnail:', error);
        throw error;
    }
};
module.exports = {
    getAllVideos,
    getVideoStream,
    getThumbnail
};

