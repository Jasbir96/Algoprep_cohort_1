import { useState } from "react";

function NormalInputCounter() {
    //  state management  -> set
    const [count, setCount] = useState(0);
    const [delta, setDelta] = useState(1);
    const [value, setValue] = useState("");


    // bussiness logic
    const increment = () => {
        setCount(count + delta);
    }
    const decrement = () => {
        setCount(count - delta);
    }
    const updateDeltaHandler = () => {
        setDelta(Number(value));
    }
    //  ui
    return (<>
        <div>
            <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />
            <button onClick={updateDeltaHandler}>update Delta</button>
        </div>

        <div style={{
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
    </>
    )


}
export default NormalInputCounter;


/****
 * 1. install 
 * npm i @reduxjs/toolkit
 * npm i react-redux 
 * **/ 