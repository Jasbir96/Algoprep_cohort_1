const speedUp = document.querySelector("#speedUp");
const speedDown = document.querySelector("#speedDown");
const volumeUp = document.querySelector("#volumeUp");
const volumeDown = document.querySelector("#volumeDown");
const videoBtn = document.querySelector("#videoBtn");
const videoInput = document.querySelector("#videoInput");


const speedUpHandler = () => {
    alert("Speed up was clicked");
}

const handleInput = () => {
    console.log("Input is clicked");
    // you have make it click
    videoInput.click();

}
const acceptInputHandler = (obj) => {
    const selectedVideo = obj.target.files[0];
    // console.log("files",selectedFiles);
}


speedUp.addEventListener("click", speedUpHandler);
videoBtn.addEventListener("click", handleInput);

// when file is selected
videoInput.addEventListener("change", acceptInputHandler)