/**
 * Isolation
 * requirement
 * 1. render -> 
 * 2.  plus pe click
// 3. minus pe click
 *  */








/*****
 * Jest : 
 * describe  : contains list of testcases
 *  it : ek usecase ke liye testcase 
 *  expect
 * 
 * React testing
 * render : to render you component in isolation
 * screen : to get you required element for testing from 
 * that isolated area 
 * 
 * firevent :
 * 
 * 
 * 
 * 
 * **/
import React from "react"
import { render, screen, fireEvent } from
    "@testing-library/react"
import Counter from "../Counter"

describe("counter", () => {
    // initial render
    it("inital render", () => {
        // render the component in isolation
        render(<Counter />)
        // select
        const plusButton = screen.getByTestId("plusButton");
        // verification
        // existence
        expect(plusButton).toBeInTheDocument();
        // content
        expect(plusButton).toHaveTextContent("+");
        // visibility
        expect(plusButton).toBeVisible();
        const Count = screen.getByTestId("count");
        expect(Count).toHaveTextContent(0);
    })

    it("plus is working", () => {
        // render
        render(<Counter />)
        // select+ation
        const plusButton = screen.getByTestId("plusButton");
        //event 
        fireEvent.click(plusButton);
        fireEvent.click(plusButton);
        fireEvent.click(plusButton);
        // verifing
        const Count = screen.getByTestId("count");
        expect(Count).toHaveTextContent(3);
    })

    it("minus case", () => {
        //  1. step
        render(<Counter />)
        // select the button
        const minusButton = screen.getByTestId("minusButton");
        fireEvent.click(minusButton);
        fireEvent.click(minusButton);
        fireEvent.click(minusButton);
        // verifing
        const Count = screen.getByTestId("count");
        expect(Count).toHaveTextContent(-3);

    })
})