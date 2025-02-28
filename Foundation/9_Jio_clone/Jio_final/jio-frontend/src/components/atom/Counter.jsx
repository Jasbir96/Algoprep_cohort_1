import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Counter</h1>
            <button
                data-testid="plusButton"
                onClick={() => { setCount(count + 1) }}>+</button>
            <h2 data-testid="count">{count}</h2>
            <button
                data-testid="minusButton"
                onClick={() => { setCount(count - 1) }}>-</button>
        </>
    )
}
export default Counter;


