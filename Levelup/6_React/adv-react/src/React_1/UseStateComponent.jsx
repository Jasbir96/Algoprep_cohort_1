import React from 'react'

import { useState } from 'react'

function UseStateComponent() {
    const [count, setCount] = useState(0);

    const incrementHandler = () => {
        setCount(count + 1);
    }
    const decrementHandler = () => {
        setCount(count - 1);
    }

    const handlerUpdateEverySec = () => {
        setInterval(() => {
            console.log("calling interval")
            setCount((prevCount)=>prevCount + 1)
        }, 1000);
    }
    return (
        <>
            <div>

            </div>
            <div className="card">
                <button onClick={incrementHandler}>
                    +
                </button>
                count is {count}
                <button onClick={decrementHandler}>
                    -
                </button>
            </div>
            <p className="read-the-docs">
                <button onClick={handlerUpdateEverySec}> Increment after Every Second</button>
            </p>
        </>
    )
}

export default UseStateComponent;

