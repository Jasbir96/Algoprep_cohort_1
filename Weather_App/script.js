
// select
const searchBtn = document.querySelector("#search");
const searchInput = document.querySelector("input");
const tempratureElem = document.querySelector(".temprature");
const locationElem = document.querySelector(".location");
const emojiImg = document.querySelector(".emoji");
// event listener
searchBtn.addEventListener("click", async function () {
    const location = searchInput.value;
    if (location != "") {
        // data get
        const data = await fetchWeather(location)
        //update data inside my dom

        if (data != null) {
            // do nothing
            updateDOM(data);
        } 
        searchInput.value = "";
    }
})

function updateDOM(data) {
    /***********************filter required data*********************/
    console.log("i will update the dom", data);
    const temp = data.current.temp_c;
    const location = data.location.name;
    const timeData = data.location.localtime;
    const [date, time] = timeData.split(" ");
    const iconLink = data.current.condition.icon;
    const condition = data.current.condition.text;
    console.log("``````````````````````````");
    console.log("temp: ", temp, "location : ", location, "Date:", date);
    console.log("Time ", time, "link", iconLink)
    console.log("``````````````````````````");
    /*********************update the dom*************************/
    tempratureElem.textContent = temp +"°C";
    locationElem.textContent = location;
    emojiImg.src = iconLink;

}

async function fetchWeather(location) {
    const url = `http://api.weatherapi.com/v1/current.json?key=6fc74cf82bc44773a8a171855241407&q=${location}&aqi=no`
    const response = await fetch(url);
    if (response.status == 400) {
        alert("location is invalid");
        return null;
    } else if (response.status == 200) {
        const json = await response.json();
        console.log(json);
        return json;
    }
}
