import './App.css'
import React, { useState } from 'react'
// lecture-1
// import UseStateComponent from './React_1/UseStateComponent'
// import UseEffectComponent from './React_1/UseEffectComponent';

// function App() {
//   const [showEffect, setShowEffect] = useState(true);
//   return (
//     <>
//       <button
//         onClick={() => { setShowEffect((prevEffect) => { setShowEffect(!prevEffect) }) }}>
//         Toggle Effect :{showEffect}</button>

//       <UseStateComponent />
//       <h2>``````````````````````````````````````</h2>
//       {showEffect&&<UseEffectComponent />}
//     </>

//   )
// }

// Lecture-2
import UseStateCounter from './React_2/UseStateCounter';
import UseReducerCounter from './React_2/UseReducerCounter';
import FormMangement from './React_2/FormMangement';
import UseRefInput from './React_2/UseRefInput';

function App() {
  return <>
    {/* <UseStateCounter /> */}
    {/* <UseReducerCounter/> */}
    {/* <FormMangement/> */}
    <UseRefInput/>
  </>
}




export default App