import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login"
import Chat from "./Components/Chat";
import PageNotFound from "./Components/PageNotFound";
import Home from "./Components/Home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        {/* it will only match with /login string */}
        <Route path="/login" element={<Login></Login>}></Route>
        {/* it will match to the route that has chat/sometext */}
        <Route path="/chat/:uniqueId" element={<Chat></Chat>}></Route>
        {/* it will match with everyThing */}
        <Route path="*" element={<PageNotFound></PageNotFound>} ></Route>
      </Routes>
    </>
  )
}

export default App
