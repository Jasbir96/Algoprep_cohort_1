import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login"
import Chat from "./Components/Chat";
import PageNotFound from "./Components/PageNotFound";
import Home from "./Components/Home";
import ProtectedRoute from "./Components/ProtectedRoute";
import { useState } from "react";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <>
      <Routes>
        <Route path="/" element={<ProtectedRoute isLoggedIn={isLoggedIn}  >
          <Home setIsLoggedIn={setIsLoggedIn}></Home>
        </ProtectedRoute>}></Route>

        <Route path="/chat/:uniqueId" element={
          <ProtectedRoute isLoggedIn={isLoggedIn}><Chat></Chat></ProtectedRoute>
        }></Route>

        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}></Login>}></Route>
        <Route path="*" element={< PageNotFound />} />
      </Routes>
    </>
  )
}

export default App

