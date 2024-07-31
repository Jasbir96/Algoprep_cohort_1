function App() {
  return (
    <>
      <header className="h-[150px] bg-[#2c3e50] flex justify-center items-center">
        <div id="input-container" className="w-[60%] flex justify-between">
          <input type="text" name="" id="" placeholder="Enter Location" 
          className="text-white text-lg bg-transparent outline-none py-4 px-0  border-b-2 border-white w-[84%] border-b-solid" />
          <button id="search" className="bg-[#44ad96] text-lg border-none py-4 px-8 text-white cursor-pointer">Search</button>
        </div>
      </header>
      <main className="flex items-center justify-center text-white bg-[#01161E] h-[calc(100vh-150px)]">
        <div id="weather-container" className="flex gap-4 items-center h-20">
          <div id="temprature">21.2°C</div>
          <div id="location-date">
            <div id="location" className="text-[2rem] mb-[1.6rem]">Delhi</div>
            <span id="time">12:43</span>
            <span id="Date">2024-07-15</span>
          </div>
          <div id="weather-state">
            <img src="//cdn.weatherapi.com/weather/64x64/day/113.png" id="emoji" />
              <div id="condition" className="text-center">Sunny</div>
          </div>
          </div>
      </main>

    </>
  )
}

export default App
