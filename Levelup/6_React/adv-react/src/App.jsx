import React, { useState } from 'react'
import UseStateComponent from './React_1/UseStateComponent'
import UseEffectComponent from './React_1/UseEffectComponent';
import './App.css'


function App() {
  const [showEffect, setShowEffect] = useState(true);
  return (
    <>
      <button
        onClick={() => { setShowEffect((prevEffect) => { setShowEffect(!prevEffect) }) }}>
        Toggle Effect :{showEffect}</button>

      <UseStateComponent />
      <h2>``````````````````````````````````````</h2>
      {showEffect&&<UseEffectComponent />}
    </>

  )
}

export default App