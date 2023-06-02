import { createContext, useState } from "react";
import { dark, light } from "../variables/theme";

const ThemeContext = createContext(); 
const initialContext = "light"

const ThemeProvider = ({children}) =>{

    const [theme, setTheme] = useState(initialContext)
    const themeStyle = theme === "light" ? light : dark;
    const handleTheme = (e)=>{
        if(e.target.value === "light"){
            setTheme("light")
        }else{
            setTheme("dark")
        }
    }

    const data = {theme,themeStyle,handleTheme};

    return <ThemeContext.Provider value = {data}>{children}</ThemeContext.Provider>
}



export {ThemeProvider}
export default ThemeContext;
