import "./themeManager.css";
import React, { useContext } from "react";
import { useTheme } from "./ThemeContext";
function Header() {
    console.log("renderd Header");
    console.log("`````````````````````");
    return (<div style={{ border: "1px solid ", padding: "1rem", margin: "1rem" }}>
        <div >Header</div>
        <div>⬇</div>
        <Options></Options>
        <Options></Options>
        <Options></Options>
        <div>-----------------------------</div>
    </div>)
}
function Options() {
    const { CTheme } = useTheme();
    return <div className={CTheme == "light" ? "light" : "dark"}>Option</div>
}
export default Header;