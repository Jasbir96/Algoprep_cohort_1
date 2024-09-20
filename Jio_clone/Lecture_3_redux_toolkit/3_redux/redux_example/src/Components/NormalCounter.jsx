import { useState } from "react";

function Counter() {
//  state management  -> set
    const [count, setCount] = useState(0);

    
    // bussiness logic
    const increment = () => {
// update
        setCount(count + 1);
    }
    const decrement = () => {
        // update
        setCount(count - 1);
    }

//  ui
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