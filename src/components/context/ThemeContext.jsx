import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";


export const ThemeContext = createContext()

export const ThemeContextProvier = ({children})=>{
    const [contextTheme, setContextTheme] = useState('Dark')
    const values = {contextTheme, setContextTheme}
    return (
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    )
}
export const useThemeContext = () =>{
    const context = useContext(ThemeContext)
    return context
}