import React from 'react'

import Footer from "../context/themeManager/Footer";

function ChainB() {
    { console.log("rendered chain b component") }
    return (
        <>
            <h3>ChainB</h3>
            <ChainBGrandParent />
        </>
    )
}

function ChainBGrandParent() {
    { console.log("rendered ChainBGrandParent  ") }
    return (
        <>
            <h3>ChainBGrandParent </h3>
            <ChainBParent />
        </>

    )
}
function ChainBParent() {
    { console.log("rendered ChainBParent  ") }
    return (
        <>
            <h3>ChainBParent</h3>
            <ChainBChildren />
        </>

    )
}
function ChainBChildren() {
    { console.log("rendered ChainBChildren  ") }
    return (
        <>
            <h3>ChainBChildren</h3>
            <ChainBGrandChild />
        </>

    )
}
function ChainBGrandChild() {
    { console.log("rendered ChainBGrandChildf  ") }
    return (
        <>
            <h3>ChainBGrandChildren</h3>
            <Footer />
        </>

    )
}

export default ChainB