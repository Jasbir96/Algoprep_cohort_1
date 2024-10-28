import Context from './poc/context/Basic_Context'
import Home from './poc/context/themeManager/Home'
import ThemeContext from './poc/context/themeManager/ThemeContext'
function App() {
  return (
    <>
      {/* <Context></Context> */}
      {/* complex example */}
     <ThemeContext>
      <Home></Home>
     </ThemeContext>
    </>
  )
}
export default App;