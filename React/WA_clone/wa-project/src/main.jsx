
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Routing_App from './POC/Protected_Routing/Routing_App';
import './index.css'
import { BrowserRouter } from "react-router-dom";
import User from './POC/useEffect/User';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    {/* <App></App> */}
        {/* <Routing_App></Routing_App> */}
        <User></User>
    </BrowserRouter>,)
