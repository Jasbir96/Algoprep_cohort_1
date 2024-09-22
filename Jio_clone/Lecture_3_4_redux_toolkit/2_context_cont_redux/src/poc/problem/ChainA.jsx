import React from 'react'
import Header from "../context/themeManager/Header"

function ChainA() {
    {console.log("rendered chain a component")}
    return (
        <>
            <h3>ChainA</h3>
            <ChainAGrandParent />
        </>
    )
}

function ChainAGrandParent() {
    { console.log("rendered ChainAGrandParent  ") }
    return (
        <>
            <h3>ChainAGrandParent </h3>
            <ChainAParent />
        </>

    )
}
function ChainAParent() {
    { console.log("rendered ChainAParent  ") }
    return (
        <>
            <h3>ChainAParent</h3>
            <ChainAChildren />
        </>

    )
}
function ChainAChildren() {
    { console.log("rendered ChainAChildren  ") }
    return (
        <>
            <h3>ChainAChildren</h3>
            <ChainAGrandChild />
        </>

    )
}
function ChainAGrandChild() {
    { console.log("rendered ChainAGrandChildf  ") }
    return (
        <>
            <h3>ChainAGrandChildren</h3>
            <Header/>
        </>

    )
}

export default ChainA