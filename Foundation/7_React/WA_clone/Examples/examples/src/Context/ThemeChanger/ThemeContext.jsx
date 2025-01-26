import { useContext } from "react";
// 1. 
const ThemeContext = React.createContext();
// hook
export function useDarkTheme() {
    // 3
    return useContext(ThemeContext);
}

function ThemeWrapper({ children }) {

    const [isDark, updateTheme] = useState(false);
    const handleToggleTheme = () => {
        updateTheme(!isDark);
    }
    return <ThemeContext.Provider value={{ isDark, handleToggleTheme }}>
        {children}
    </ThemeContext.Provider>

}

export default ThemeWrapper;