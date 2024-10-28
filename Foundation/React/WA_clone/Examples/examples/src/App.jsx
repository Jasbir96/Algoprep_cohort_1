
import './App.css';
import HeadingParent from './Components/HeadingParent';
import ShoppingCart from './Components/ShoppingCart';

import Counter from './Components/Counter';

import React, { useState } from "react";
import PropDrilling from './Context/PropDrilling';
import PropDrillingSol from './Context/PropDrillingSol';

import { Route, Routes } from 'react-router-dom';
import Home from './Context/ThemeChanger/Home';
import PageNotFound from './Context/ThemeChanger/PageNotFound';


import  { useDarkTheme } from './Context/ThemeChanger/ThemeContext';

function App() {

  const { handleToggleTheme } = useDarkTheme();
  return (
    <>
      <h1>App component</h1>
      {/* <HeadingParent > </HeadingParent> */}
      {/* <ShoppingCart></ShoppingCart> */}
      {/* <Counter ></Counter> */}
      {/* <CounterParent /> */}
      {/* <InputBox /> */}
      {/* html input */}
      {/* <input type="text" /> */}
      {/* <PropDrilling></PropDrilling> */}
      {/* <PropDrillingSol></PropDrillingSol> */}

      <button onClick={handleToggleTheme}> Toggle Theme</button>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>

    </>
  )
}



export default App;
