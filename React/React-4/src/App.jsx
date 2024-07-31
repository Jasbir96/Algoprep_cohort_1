import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [weatherObj, setWeatherObj] = useState({
    temp: "--",
    location: "--",
    date: "--",
    time: "--",
    condition: "--",
    src: null
  })

  async function fetchWeather(location) {

    const url = `http://api.weatherapi.com/v1/current.json?key=6fc74cf82bc44773a8a171855241407&q=${location}&aqi=no`
    // fetch -> inbuilt function to get http response from a server
    const response = await fetch(url);
    if (response.status == 400) {
      alert("location is invalid");
      return null;
    } else if (response.status == 200) {
      const json = await response.json();
      return json;
    }
  }

  const handleClick = async () => {
    // get the value of the location
    if (value != "") {
      // you need to make the request
      const data = await fetchWeather(value);
      if (data == null) {
        alert("no data found for this location");
        return;
      }
      // after getting the data -> data extract 
      const temp = data.current.temp_c;
      const location = data.location.name;
      const timeData = data.location.localtime;
      const [date, time] = timeData.split(" ");
      const iconLink = data.current.condition.icon;
      const condition = data.current.condition.text;
      // update the state 
      let newobj = {
        "temp": temp,
        "location": location,
        "date": date,
        "time": time,
        "condition": condition,
        "src": iconLink
      }
      setWeatherObj(newobj);
    }
    else {
      alert("Location can't be empty")
    }
  }
  const handleInput = (e) => {
    setValue(e.target.value);
  }
  return (
    <>
      <header className="h-[150px] bg-[#2c3e50] flex justify-center items-center">
        <div id="input-container" className="w-[60%] flex justify-between">
          <input type="text" name="" id="" placeholder="Enter Location"
            className="text-white text-lg bg-transparent outline-none py-4 px-0  border-b-2 border-white w-[84%] border-b-solid"
            onChange={handleInput}
          />
          <button id="search"
            className="bg-[#44ad96] text-lg border-none py-4 px-8 text-white cursor-pointer"
            onClick={handleClick}
          >Search</button>
        </div>
      </header>
      <main className="flex items-center justify-center text-white bg-[#01161E] h-[calc(100vh-150px)]">
        <div id="weather-container" className="flex gap-4 items-center h-20">
          <div id="temprature">{weatherObj.temp}°C</div>
          <div id="location-date">
            <div id="location" className="text-[2rem] mb-[1.6rem]">{weatherObj.location}</div>
            <span id="time">{weatherObj.time}</span>
            <span id="Date">{weatherObj.date}</span>
          </div>
          <div id="weather-state">
            <img src={weatherObj.src} id="emoji" />
            <div id="condition" className="text-center">{weatherObj.condition}</div>
          </div>
        </div>
      </main>

    </>
  )
}

export default App
