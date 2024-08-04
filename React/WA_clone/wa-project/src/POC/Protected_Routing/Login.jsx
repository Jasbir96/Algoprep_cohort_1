import React from 'react'
import { useNavigate } from 'react-router-dom';
// auth-step-3
import { signInWithPopup } from "firebase/auth";
import { auth } from '../../../firebase';
import { GoogleAuthProvider } from 'firebase/auth';


function Login(props) {
    const setIsLoggedIn = props.setIsLoggedIn;

    const navigate = useNavigate();

    const handleLogin = async () => {
        // login wala logic 
        // auth-step-4
        const result = await signInWithPopup(auth, new GoogleAuthProvider);
        console.log(result);

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