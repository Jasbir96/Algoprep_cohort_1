

const videoBtn = document.querySelector("#videoBtn");
const videoInput = document.querySelector("#videoInput");
const videoPlayer = document.querySelector("#main");


const handleInput = () => {
    // console.log("Input is clicked");
    // you have make it click
    videoInput.click();
}
const acceptInputHandler = (obj) => {
    // to get file selected
    const selectedVideo = obj.target.files[0];
    //  src -> base64 
    const link = URL.createObjectURL(selectedVideo);
    // console.log(link);

    const videoElement = document.createElement("video");
    videoElement.src = link;
    // now it is done
    videoElement.setAttribute("class", "video");
    videoPlayer.appendChild(videoElement);
    // videoElement.controls = true;
    videoElement.play();
    videoElement.volume = 0.3;
    // how to inc/dec the volume of a video in js 
    // how to inc/dec speed of a video in js 
    videoElement.addEventListener("loadedmetadata",function(){
        // your time will there
    })
}

videoBtn.addEventListener("click", handleInput);
// when file is selected
videoInput.addEventListener("change", acceptInputHandler);

/*******************volume and speed*******************/
// select the element
const speedUp = document.querySelector("#speedUp");
const speedDown = document.querySelector("#speedDown");
const volumeUp = document.querySelector("#volumeUp");
const volumeDown = document.querySelector("#volumeDown");
const toast = document.querySelector(".toast");

const speedUpHandler = () => {
    // * where is the video-> 
    const videoElement = document.querySelector("video");
    if (videoElement == null) {
        return;
    }
    // i want that playback speed should be at max 300%
    if (videoElement.playbackRate > 3) {
        return;
    }
    // video -> speed increase
    const increaseSpeed = videoElement.playbackRate + 0.5;
    videoElement.playbackRate = increaseSpeed;

    showToast(increaseSpeed + "X");

    // which property you will use to increase it's speed 
    // * how much you want to increase
}
const speedDownhandler = () => {
    const videoElement = document.querySelector("video");
    if (videoElement == null) {
        return;
    }
    if (videoElement.playbackRate > 0) {
        // video -> speed decrease
        const decreasedSpeed = videoElement.playbackRate - 0.5;
        videoElement.playbackRate = decreasedSpeed;
        console.log("decreased speed", decreasedSpeed)
        showToast(decreasedSpeed + "X");
    }
}

const volumeUpHandler = () => {
    // select the video
    const videoElement = document.querySelector("video");
    if (videoElement == null) {
        return;
    }
    // property to play with volume 
    if (videoElement.volume >= 0.99) {
        return;
    }
    const increasedVolume = videoElement.volume + 0.1
    videoElement.volume = increasedVolume;
    // console.log("increseas volume", increasedVolume);
    const percentage = (increasedVolume * 100) + "%";
    showToast(percentage)
}

const volumeDownHandler = () => {
    // select the video
    const videoElement = document.querySelector("video");
    if (videoElement == null) {
        return;
    }
    // property to play with volume 
    if (videoElement.volume <= 0.1) {
        videoElement.volume = 0;
        return
    }
    const decreaseVolume = videoElement.volume - 0.1;
    videoElement.volume = decreaseVolume
    const percentage = (decreaseVolume * 100) + "%";
    showToast(percentage)
}


function showToast(message) {
    // toast show
    toast.textContent = message;
    toast.style.display = "block";
    setTimeout(() => {
        toast.style.display = "none"
    }, 1000);
}


// identify on which event your logic should trigger
speedUp.addEventListener("click", speedUpHandler);
speedDown.addEventListener("click", speedDownhandler)
volumeUp.addEventListener("click", volumeUpHandler);
volumeDown.addEventListener("click", volumeDownHandler);


/***********controls******************/
const handleFullScreen = () => {
    videoPlayer.requestFullscreen();
}

const fullScreenElem = document.querySelector("#fullScreen");
fullScreenElem.addEventListener("click",handleFullScreen)