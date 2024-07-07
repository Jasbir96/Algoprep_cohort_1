const speedUp = document.querySelector("#speedUp");
const speedDown = document.querySelector("#speedDown");
const volumeUp = document.querySelector("#volumeUp");
const volumeDown = document.querySelector("#volumeDown");

const videoBtn = document.querySelector("#videoBtn");
const videoInput = document.querySelector("#videoInput");

const videoPlayer = document.querySelector("#main");

const speedUpHandler = () => {
    // alert("Speed up was clicked");
    const videoElement = document.querySelector(".main .video");
    if (isVideoPresent !== null) {
        // video is present
        videoElement.defaultPlaybackRate = videoElement.defaultPlaybackRate + 0.1;
    }
}

const handleInput = () => {
    console.log("Input is clicked");
    // you have make it click
    videoInput.click();

}
const acceptInputHandler = (obj) => {
    const selectedVideo = obj.target.files[0];
    //  src -> base64 
    const link = URL.createObjectURL(selectedVideo);

    const videoElement = document.createElement("video");
    videoElement.src = link;
    // now it is done
    videoElement.setAttribute("class", "video");
    videoPlayer.appendChild(videoElement);
    videoElement.play();
    videoElement.volume = 70;

    // how to inc/dec the volume of a video in js 
    // how to inc/dec speed of a video in js 
}



speedUp.addEventListener("click", speedUpHandler);
videoBtn.addEventListener("click", handleInput);

// when file is selected
videoInput.addEventListener("change", acceptInputHandler)