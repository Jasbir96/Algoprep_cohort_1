import { useContext } from "react";
import { ThemeWrapper } from "../../App";

function Footer() {
    console.log("rendered Footer");
    console.log("`````````````````````````````")
    return (<div style={{ border: "1px solid ", padding: "1rem", margin: "1rem" }}>
        <div >Footer</div>
        <div>⬇</div>
        <Options></Options>
        <Options></Options>
        <Options></Options>
        <div>-----------------------------</div>
    </div>)
}

function Options() {
    const isDark = useContext(ThemeWrapper);

    return <div className={`${isDark ? "dark" : "light"}`}>Option</div>
}
export default Footer;