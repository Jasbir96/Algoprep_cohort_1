import React from 'react'
import Header from './Header';
import Footer from "./Footer";
import Article from "./Article";
import { useTheme } from './ThemeContext';
import ChainA from '../../problem/ChainA';
import ChainB from "../../problem/ChainB";
function Home() {
    const { toggleTheme } = useTheme();
    console.log("Rendered Home")
    return (
        <>
            <h1>Theme Management</h1>
            <button
                onClick={toggleTheme}
            >Toggle Theme</button>
            <ChainA></ChainA>
            <Article></Article>
           <ChainB></ChainB>
        </>
    )
}

export default Home