/******
 * useRef: used to save a value across re-renders
 * useRef : used to access  dom element directly  : used to add programmatic focus/blur 
 * ***/


// import React, {  useRef, useState } from 'react'

// function UseRefInput() {
//     const [input, setInput] = useState("");
//     // let a=10;
//     // it is used to save values across re-renders 
//     const initalRef=useRef(10);
//     console.log("a",initalRef.current)
//     initalRef.current++;
//     console.log("a",initalRef.current);

//     console.log("render");
//     return (
//         <>
//             <h2>UseRef Example</h2>
//             <input type="text" value={input} onChange={(e) => { setInput(e.target.value) }} />
//         </>

//     )
// }

// export default UseRefInput;



//******adding focus programattically */ 

import React, { useRef, useState } from 'react'

function UseRefInput() {
    const [input, setInput] = useState("");
    const refVar = useRef(null);
    const addFocus = () => {
        refVar.current.focus();
    }

    return (
        <>
            <h2>UseRef Example</h2>
            <input type="text"
                value={input}
                onChange={(e) => { setInput(e.target.value) }}
                ref={refVar}
            />
            <button onClick={addFocus}> Add Focus</button>
        </>

    )
}

export default UseRefInput;

