import React from 'react'
import { useNavigate } from 'react-router-dom';
function Login(props) {
    const setIsLoggedIn = props.setIsLoggedIn;

    const navigate = useNavigate();
    
    const handleLogin = () => {
        // login wala logic 
        setIsLoggedIn(true);
        // alert("login");
        navigate("/");

    }
    return (
        <div>
            <h2>Login Page</h2>
            <button onClick={handleLogin}>Login </button>
        </div>
    )
}

export default Login