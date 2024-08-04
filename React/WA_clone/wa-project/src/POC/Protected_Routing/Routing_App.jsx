import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Login from "./Login"
import ProtectedRoute from "./ProtectedRoute"
import Chat from './Chat';
// route ki matching -> BiggerComponent[originalCompoenent]  

function Routing_App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <>
            <h1>Routing_App</h1>
            <Routes>
                <Route path="/"  element={<ProtectedRoute isLoggedIn={isLoggedIn}  >
                    <Home setIsLoggedIn={setIsLoggedIn}></Home>
                </ProtectedRoute>}></Route>
                <Route path="/chat/:uniqueId" element={
                    <ProtectedRoute isLoggedIn={isLoggedIn}><Chat></Chat></ProtectedRoute>
                }></Route>
                <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} ></Login>}></Route>
            </Routes>
        </>
    )
}



export default Routing_App;



/*

Final version
isLoggedIn-> true -> Home page  ->"/"
isLoggedIn -> false -> login -> /login

Intermediate cases
* isLoggedIn-> true -> /login -> /
* isLoggedIn -> false -> /-> "/login"



WHat is the duty of Logout button : 
* isLoggedIN -> false,
* navigate -> /login
***/ 

// WHat is the duty of Login button:
// * isLoggedIN -> true
// navigate -> /
