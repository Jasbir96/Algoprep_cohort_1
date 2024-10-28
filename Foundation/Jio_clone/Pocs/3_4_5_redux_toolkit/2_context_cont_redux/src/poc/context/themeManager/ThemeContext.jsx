import React, { useState } from 'react'
import { useContext } from 'react';
// 1
const ThemeWrapper = React.createContext();
// 2 -> soemone can directly acces the value
export const useTheme = function () {
    return useContext(ThemeWrapper);
}
// passing all the states , handler -> to the children
function ThemeContext({children}) {
    // state 
    const [CTheme, setCTheme] = useState("light");
    // handler functions
    const toggleTheme = () => {
        const newTheme =
            CTheme == "light" ? "dark" : "light";
        setCTheme(newTheme)
    }
    return (
        <ThemeWrapper.Provider
            value={{ CTheme, toggleTheme
             }}>
            {children}
        </ThemeWrapper.Provider>
    )
}
export default ThemeContext;