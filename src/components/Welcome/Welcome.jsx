import React from 'react'
import './Welcome.css'
import relax from "../../assets/img/gif.gif";
import { useThemeContext } from '../context/ThemeContext';

const Welcome = () => {
    const {contextTheme, setContextTheme} = useThemeContext()

  return (
    <div className='contenedor' id={contextTheme}>
        <h1 id={contextTheme} className='title'>👨🏽‍💻Bienvenidos a la pagina de Codigo C13👩🏽‍💻</h1>
        <img className='gif' src={relax} />
    </div>
  )
}

export default Welcome