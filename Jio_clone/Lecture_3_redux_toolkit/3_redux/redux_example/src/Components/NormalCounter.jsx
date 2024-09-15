import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    
    // bussiness logic
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }

 
    return <div style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw"

    }}>
        <button onClick={increment}>+</button>
        <p>Count :{count}</p>
        <button onClick={decrement}>-</button>
    </div>
}
export default Counter;


/****
 * 1. install 
 * npm i @reduxjs/toolkit
 * npm i react-redux 
 * **/ 