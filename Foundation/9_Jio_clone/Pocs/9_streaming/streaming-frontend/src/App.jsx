import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Video Streaming Example</h1>
      <video width="640" height="360" controls>
        <source src="http://localhost:3000/video" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default App;