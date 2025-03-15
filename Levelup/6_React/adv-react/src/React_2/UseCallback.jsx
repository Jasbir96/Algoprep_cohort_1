import React, { useCallback, useState } from 'react'

function UseCallback() {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState("");

    // hositing ->  handleCLick -> new memory
    const memoizedCallback = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    return (
        <div>
            <input type="text" value={value}
                onChange={(e) => { setValue(e.target.value) }}
            />
            <p>Count: {count}</p>
            <MemoizedChildrenComponent
                parentClick={memoizedCallback}
                count={count}
            ></MemoizedChildrenComponent>
        </div>
    )
}

const MemoizedChildrenComponent = React.memo(ChildrenComponent);
function ChildrenComponent({ parentClick, count }) {
    console.log('ChildComponent is rerendered', new Date().toLocaleTimeString());
    return <button onClick={parentClick}>child says Increment count from : {count}</button>
}

export default UseCallback;