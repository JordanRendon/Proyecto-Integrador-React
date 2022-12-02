import React from 'react'
import imageNotFound from '../../assets/img/NotFound.gif'
import { useThemeContext } from '../context/ThemeContext'
import './NotFound.css'

const NotFound = () => {
    const {contextTheme, setContextTheme} = useThemeContext()
  return (
    <div id={contextTheme} className='container-not-found'>
        <h1 id={contextTheme} className='title'> 404 Not found</h1>
        <img className='error' src={imageNotFound} />
    </div>
  )
}

export default NotFound