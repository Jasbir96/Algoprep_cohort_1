
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import AuthWrapper from './Components/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthWrapper>
        <BrowserRouter>
            <App></App>
        </BrowserRouter>
    </AuthWrapper>)
