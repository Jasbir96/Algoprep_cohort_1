import { useTheme } from "./ThemeContext";
import "./themeManager.css";

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
    const { CTheme } = useTheme();
    return <div className={CTheme == "light" ? "light" : "dark"}>Option</div>
}
export default Footer;