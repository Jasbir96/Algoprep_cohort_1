import React, { useReducer } from 'react';

const countReducer = (state, action) => {
    switch (action) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        case "INCREMENTBY5":
            return state + 5;
        case "DECREMENTBY5":
            return state - 5;
        default:
            return state;
    }
}

function UseReducerCounter() {

    // State variable for the counter
    // userReducer : 
    //  1. input :reducer function,initial State
    // 2. ouput : state variable , dispatch
    // a reducer: that hold all the permuatation of the state change logic 
 const [count, dispatch] = useReducer(countReducer,0);

    // // Function to increment the counter by 1
    // const increment = () => {
    //     // setCount(count + 1);
    // };

    // // Function to decrement the counter by 1
    // const decrement = () => {
    //     // setCount(count - 1);
    // };

    // // Function to increment the counter by 5
    // const incrementBy5 = () => {
    //     // setCount(count + 5);
    // };

    // // Function to decrement the counter by 5
    // const decrementBy5 = () => {
    //     // setCount(count - 5);
    // }

    return (
        <>
            <h2>UseReducerCounter:  {count}</h2>
            <button onClick={() => { dispatch("INCREMENT") }}>Increment</button>
            <button onClick={() => { dispatch("DECREMENT") }}>Decrement</button>
            <button onClick={() => { dispatch("INCREMENTBY5") }}>Increment by 5</button>
            <button onClick={() => { dispatch("DECREMENTBY5") }}>Decrement by 5</button>

            <h2>`````````````````````````````</h2>
        </>
    )
}

export default UseReducerCounter;