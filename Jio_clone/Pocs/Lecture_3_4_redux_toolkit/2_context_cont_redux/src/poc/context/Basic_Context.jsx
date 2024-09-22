import React, { useState, useContext } from 'react'
// 1
const ContextWrapper = React.createContext();

const useGetMessage = function () {
    return useContext(ContextWrapper);
}
function Context() {
    const [message, setMessage] = useState("message from gp");
    return <>
        <h1>Context Example</h1>
        {/* //2 */}
        {/* wrapping around the top most guy */}
        <ContextWrapper.Provider value={{ message, setMessage }}>
            <GrandParent></GrandParent>
        </ContextWrapper.Provider>
    </>
}

function GrandParent() {
    return (
        <>
            <h2>Grand parent</h2>
            <h2>⬇</h2>
            <Parent ></Parent>
        </>
    )
}
function Parent() {
    return (
        <>
            <h2>Parent</h2>
            <h2>⬇</h2>
            <Children ></Children>
        </>
    )
}
function Children() {
    // 3. consumption
    const value = useGetMessage();
    return (
        <>
            <h2>Children </h2>
            <h2>⬇</h2>
            <h3>Message {value.message}</h3>
        </>
    )
}

export default Context;