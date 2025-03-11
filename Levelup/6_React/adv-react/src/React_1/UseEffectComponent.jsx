import React, { useEffect, useState } from 'react'

const firstCb = () => {
    console.log("useEffect with empty Dependecy");
}
const secondCb = () => {
    console.log("useEffect without  dependency array")
}
const thirdCb = () => {
    console.log("useEffect with some  dependency")
}

const secondCleanup = () => {
    console.log("cleanup function with  no dependency");
}
const thirdCleanup = () => {
    console.log("cleanup function  without  dependency array");
}

const firstCleanup = () => {
    console.log("cleanup function with empty dependency ")
}
function UseEffectComponent() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");
    // with empty dependency 
    useEffect(() => {
        firstCb();
        return firstCleanup;
    }, []);

    // with no dependency 
    useEffect(() => {
        secondCb();
        // a cleanup 
        return secondCleanup;
    })
    // with dependency
    useEffect(() => {
        thirdCb();
        console.log("`````````````````````````````````````");
        return thirdCleanup;
    }, [count])


    console.log("render, component", `count ${count}`, `input ${input}`);
    return (
        <>
            <h2>UseEffectComponent</h2>
            <p>count :{count}</p>
            <button onClick={() => { setCount(prevCount => prevCount + 1) }}>+</button>
            <br />
            <input type="text" value={input} onChange={(e) => { setInput(e.target.value) }} />
        </>
    )
}

export default UseEffectComponent;